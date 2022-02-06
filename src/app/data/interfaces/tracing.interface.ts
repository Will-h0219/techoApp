export interface TechoForm {
    name: string,
    email: string,
    address: string,
    phoneNumber: string,
    comment: string
}

export interface NotificationSettings {
    show: boolean,
    message?: string
}