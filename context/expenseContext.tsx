import {getCategoryColor, getDate, getId} from "@/utils/helper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useContext, useEffect, useState} from "react";

interface ExpenseContextType {
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

const initialContextValue: ExpenseContextType = {
	expenses: [],
	addExpense: () => {
		// This is a dummy function, replaced by the Provider's state management
		console.warn("addExpense called outside of ExpenseProvider");
	},
	isLoading: true,
};

export const ExpenseContext =
	createContext<ExpenseContextType>(initialContextValue);

export function ExpenseProvider({children}: {children: React.ReactNode}) {
	const [expenses, setExpenses] = useState<ExpenseContextType["expenses"]>(
		[],
	);
	const [isLoading, setIsLoading] = useState(true);

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

		getData();
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
		<ExpenseContext.Provider value={{expenses, addExpense, isLoading}}>
			{children}
		</ExpenseContext.Provider>
	);
}

export const useExpenses = () => useContext(ExpenseContext);
