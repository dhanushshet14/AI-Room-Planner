"use client";

interface ClientProps {
    user: {
        id: string;
        fullName: string | null;
        email: string;
        imageUrl: string;
    };
}

export const Client = ({ user }: ClientProps) => {
  return (
    <div className="my-12 w-full p-4 rounded-md border border-input space-y-4">
        <div className="w-full grid grid-cols-1 min-md:grid-cols-3 gap-4" >
            <div className="w-full space-y-4 col-span-1 p-10 border border-input rounded-md" >

            </div>
            <div className="w-full space-y-4 col-span-2 relative p-10 border border-input rounded-md" ></div>
        </div>
      
    </div>
  )
}

