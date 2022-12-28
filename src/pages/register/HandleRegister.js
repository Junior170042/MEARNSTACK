import axios from "axios";
export const HandleRegister = async (
    user,
    mail,
    pass,
    repass,
    errUser,
    errMail,
    errPass,
    errRepass) => {
    let errors = [];
    const myMailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!user.trim()) {
        errors.push({ type: errUser, message: "Fill out this field!" })
    } else {

        if (user.length < 3) {
            errors.push({ type: errUser, message: "Username is too short!" })
        }

        if (!isNaN(user)) {
            errors.push({ type: errUser, message: "Username is in valid!" })
        } else {
            try {
                const res = await axios.post("/auth/userExist", {
                    username: user
                });

                if (await res.data) {

                    const userExit = await res.data.username;
                    if (userExit === user) {
                        errors.push({ type: errUser, message: "Username is already taken!" });
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    if (!mail.trim()) {
        errors.push({ type: errMail, message: "Fill out this field!" })
    } else {

        if (!myMailReg.test(mail)) {
            errors.push({ type: errMail, message: "Please enter a valid email address!" })
        } else {
            try {
                const res = await axios.post("/auth/emailExist", {
                    email: mail
                });

                if (await res.data) {

                    const mailExit = await res.data.email;
                    if (mailExit === mail) {
                        errors.push({ type: errMail, message: "This email is already in use!" });
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    if (!pass.trim()) {
        errors.push({ type: errPass, message: "Fill out this field!" })
    } else {

        if (pass.length < 5) {
            errors.push({ type: errPass, message: "The password most be at least 5 characters!" })
        }
    }
    if (repass.trim() !== pass || !repass) {
        errors.push({ type: errRepass, message: "Password doesn't match!" })
    }

    if (errors.length > 0) {
        errors.forEach(function (err) {

            err.type.classList.remove('hide');
            err.type.textContent = err.message;
        })

        return false;
    } else {
        return true;

    }
};