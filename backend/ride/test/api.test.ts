import axios from "axios";

axios.defaults.validateStatus = function () {
    return true;
}

test("Deve fazer o calculo do preco de uma corrida durante o dia", async function () {
    const input = {
        segments: [
            { distance: 10, date: "2021-03-01T10:00:00" }
        ]
    };
    const response = await axios.post("http://localhost:3000/calculate_ride", input);
    const price = response.data;
    expect(price).toBe(21);
})

test("Se a distancia for inválida deve retornar um erro", async function () {
    const input = {
        segments: [
            { distance: -10, date: "2021-03-01T10:00:00" }
        ]
    };
    const response = await axios.post("http://localhost:3000/calculate_ride", input);
    expect(response.status).toBe(422);
    const output = response.data;
    console.log(output);
})