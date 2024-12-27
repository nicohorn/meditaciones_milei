"use client";
import Input from "@/components/input";
import { updateTbUserRole } from "@/repositories/user";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const user = useSession().data?.user;

  return (
    <div className="flex flex-col space-y-2">
      {" "}
      <Input placeholder="Código TB" value={value} onChange={onChange} />
      <button
        className="border py-1 border-secondary hover:bg-accent"
        onClick={async () => {
          if (user?.email) await updateTbUserRole(user?.email, value);
        }}
      >
        Aceptar
      </button>
    </div>
  );
}
