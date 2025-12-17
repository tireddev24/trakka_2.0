import {getCategoryColor, getDate, getId} from "@/utils/helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useContext, useEffect, useState} from "react";

interface ExpenseContextType {
	saveUser: (user: userType) => void;
	removeUser: () => void;
	getUser: () => {} | null;
	user: any;
	expenses: {
		id: string;
		title: string;
		amount: number;
		color: string;
		date: string;
		icon: string;
		category: string;
	}[]; // Example structure
	addExpense: (expense: any) => void;
	isLoading: boolean;
	// Add other functions/state you need here
}

interface userType {
	username: string;
	email: string;
	password: string;
}

interface dummyUser {
	username: "Michael442";
	email: "mich442@gmail.com";
	password: "123456";
}

const initialContextValue: ExpenseContextType = {
	expenses: [],
	addExpense: () => {
		// This is a dummy function, replaced by the Provider's state management
		console.warn("addExpense called outside of ExpenseProvider");
	},
	isLoading: true,
	removeUser: () => {},
	saveUser: () => {},
	getUser: () => null,
	user: {},
};

export const ExpenseContext =
	createContext<ExpenseContextType>(initialContextValue);

export function ExpenseProvider({children}: {children: React.ReactNode}) {
	const [expenses, setExpenses] = useState<ExpenseContextType["expenses"]>(
		[],
	);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const saveUser = async (user: userType) => {
		try {
			await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
		} catch (error) {
			console.log("Save error:", error);
		}
	};

	const getUser = async () => {
		try {
			const user = await AsyncStorage.getItem(USER_KEY);

			if (!user) {
				setUser(null);
			}
			const userInfo = JSON.parse(user!);
			setUser(userInfo);
			return userInfo;
		} catch (error) {
			console.log("Get error:", error);
			return null;
		}
	};

	const removeUser = async () => {
		try {
			await AsyncStorage.removeItem(USER_KEY);
			await AsyncStorage.removeItem("expenses");
			setUser(null);
		} catch (error) {
			console.log("Remove error:", error);
		}
	};

	//Get data to storage
	useEffect(() => {
		const getData = async () => {
			try {
				const storedExpenses = await AsyncStorage.getItem("expenses");
				if (storedExpenses) {
					setExpenses(JSON.parse(storedExpenses));
				}
			} catch (error) {
				console.error("Failed to load expenses from storage", error);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => {
			getUser();
			getData();
		}, 3000);
	}, []);

	//Save data to storage

	useEffect(() => {
		if (!isLoading) {
			const saveExpenses = async () => {
				try {
					await AsyncStorage.setItem(
						"expenses",
						JSON.stringify(expenses),
					);
				} catch (error) {}
			};

			saveExpenses();
		}
	}, [expenses]);

	const addExpense = (expense: any) => {
		const newExpense = {
			id: getId(),
			title: expense.title,
			amount: Number(expense.amount),
			category: expense.category.name,
			date: getDate(),
			color: getCategoryColor(expense.category.color),
			icon: expense.category.icon,
		};

		//update the list of expenses
		setExpenses([...expenses, newExpense]);
	};

	return (
		<ExpenseContext.Provider
			value={{
				expenses,
				addExpense,
				isLoading,
				saveUser,
				getUser,
				removeUser,
				user,
			}}>
			{children}
		</ExpenseContext.Provider>
	);
}

export const useExpenses = () => useContext(ExpenseContext);

const USER_KEY = "USER_DATA";
