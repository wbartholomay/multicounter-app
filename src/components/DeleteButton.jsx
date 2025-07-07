import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";

import { useState } from "react";

function DeleteButton({ counter, onDelete }) {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const deleteCounter = () => {
        onDelete && onDelete(counter.id);
    };

    return (
        <>
            <button
                onClick={(e) => {
                    setIsPanelOpen(true);
                    e.currentTarget.blur();
                }}
            >
                Delete
            </button>
            <Dialog
                open={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
                className="relative z-50"
            >
                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-zinc-800 p-12">
                        <DialogTitle className="font-bold">
                            Delete Counter
                        </DialogTitle>
                        <Description>
                            This will permanently delete the counter.
                        </Description>
                        <p>Are you sure you want do delete this counter?</p>
                        <div className="flex gap-4">
                            <button onClick={() => setIsPanelOpen(false)}>
                                Cancel
                            </button>
                            <button
                                className="!bg-red-500 text-white px-4 py-2 rounded"
                                onClick={() => {
                                    deleteCounter();
                                    setIsPanelOpen(false);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}

export default DeleteButton;
