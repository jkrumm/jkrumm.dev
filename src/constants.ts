export const SITE = {
    NAME: "jkrumm.dev",
    EMAIL: "jkrumm@pm.me",
} as const;

type Metadata = {
    TITLE: string;
    DESCRIPTION: string;
}

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "Welcome to my personal website!"
};