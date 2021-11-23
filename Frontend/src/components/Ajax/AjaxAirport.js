const ApiRoute = "https://corvalangonzalo-backend.herokuapp.com/api/";
// const ApiRoute = 'http://localhost:8000/api/'

export const Login = (Admin) => {
    return fetch(ApiRoute + "v2/CorvalanGonzalo/Admin/AdminLogin", {
        method: "post",
        mode: "cors", //importantísimo
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: Admin.email,
            password: Admin.password,
            website: "CorvalanGonzalo",
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                console.log("credenciales incorrectas");
                return false;
            } else {
                localStorage.setItem("usertoken", data.token);
                return true;
            }
        })

        .catch((error) => {
            console.log(error);
            return false;
        });
};

export const GenerateResource = (recurso) => {
    return fetch(
        ApiRoute +
            "admin-panel/CorvalanGonzalo/Admin/GenerateNewResource/" +
            recurso.urlRecurso,
        {
            method: "post",
            mode: "cors", //importantísimo
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + recurso.userToken,
            },
            body: JSON.stringify({ recurso }),
        }
    )
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                console.log("parece que hubo un error...");
                return false;
            } else {
                console.log(data);
                return true;
            }
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
};

export async function Contacto(url, Consulta) {
    return await fetch(ApiRoute + url, {
        method: "post",
        mode: "cors", //importantísimo
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
            name: Consulta.name,
            email: Consulta.email,
            phone: Consulta.phone,
            company: Consulta.company,
            question: Consulta.question,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.code);
            if (data.code === 400) {
                return false;
            } else {
                return true;
            }
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
}

export async function GetPage(url, userToken) {
    return await fetch(ApiRoute + url, {
        method: "get",
        mode: "cors", // importantísimo
        headers: {
            Authorization: "Bearer " + userToken,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((res) => res.json())

        .then((data) => {
            return data;
        })

        .catch((error) => {
            console.log(error);
            return false;
        });
}
