export interface UserForAuth {
    accessToken: string,
    username: string;
    photo: string;
    city: string;
    email: string;
    password: string;
    _id: string
}

export interface ProfileDetails {
    _id: string,
    username: string;
    photo: string;
    city: string;
    email: string;
}