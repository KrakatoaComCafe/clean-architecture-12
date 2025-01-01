import Ride from "../src/domain/Ride";

test('Deve fazer o calculos do preco de uma corrida durante o dia', function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-01T10:00:00"))
    expect(ride.calculate()).toBe(21);
});

test('Deve fazer o calculos do preco de uma corrida durante a noite', function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-01T23:00:00"))
    expect(ride.calculate()).toBe(39);
});

test("Deve fazer o calculo do preco de uma correida no domingo", function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-07T10:00:00"))
    expect(ride.calculate()).toBe(29);
})

test("Deve fazer o calculo do preco de uma corrida no domingo a noite", function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-07T23:00:00"))
    expect(ride.calculate()).toBe(50);
})

test("Deve retornar erro Invalid distance quando a distancia enviada for incorreta", function () {
    const ride = new Ride();
    expect(() => ride.addSegments(-1, new Date("2021-03-07T20:20:20"))).toThrow(new Error("Invalid distance"));
})

test("Deve retornar erro Invalid date quando a data for invalida", function () {
    const ride = new Ride();
    expect(() => ride.addSegments(10, new Date("potato"))).toThrow(new Error("Invalid date"));
})

test("Deve fazer o calculo do preco de uma corrida com preco minimo", function () {
    const ride = new Ride();
    ride.addSegments(3, new Date("2021-03-05T10:00:00"));
    expect(ride.calculate()).toBe(10);
})

test('Deve fazer o calculos de multiplos segmentos', function () {
    const ride = new Ride();
    ride.addSegments(10, new Date("2021-03-01T10:00:00"));
    ride.addSegments(10, new Date("2021-03-01T12:00:00"));
    expect(ride.calculate()).toBe(42);
});