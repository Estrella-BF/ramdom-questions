import React from "react"

export const Questions = () => {
    return (
        <div>
          <button 
                aria-disabled={true}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    Add
            </button>
        </div>
    )
}