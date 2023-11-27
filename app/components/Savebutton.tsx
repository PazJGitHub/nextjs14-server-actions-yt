"use client"

import { useFormStatus } from "react-dom"

export default function SaveButton() {
    const { pending } = useFormStatus();
    return (
        <button className="border bg-green-400" type="submit" >
        {pending ? "Saving..." : "Save"}
        </button>
    )
}