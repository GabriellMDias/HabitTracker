interface HabitProps {
    completed: number;
}

export function Habit(props: HabitProps) {
    return(
        <div className="bg-zinc-500 w-5 h-5 text-white rounded m-2 flex items-center justify-center">{props.completed}</div>
    )
}