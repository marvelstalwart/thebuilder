import { TAccountType } from "./investments"
export type TUserForm = {
    firstName: string | undefined,
    lastName: string |undefined,
    email: string | undefined,
    phone: number | undefined,
    password: string | undefined,
    role?:TAccountType | null
}