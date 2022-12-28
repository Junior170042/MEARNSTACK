export const ErrorServer = (err) => {
    const codeName = err.codeName;
    const errorKey = err.keyPattern;

    if (codeName === "DuplicateKey") {
        if (errorKey.email === 1) return "Email is already registered!";
        if (errorKey.username === 1) return "Username is already taken!";

    }
}