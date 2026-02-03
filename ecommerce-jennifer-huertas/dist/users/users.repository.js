"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    users = [
        {
            id: 1,
            email: "alejandro.garcia@example.com",
            name: "Alejandro García",
            password: "password123",
            address: "Calle Luna 123",
            phone: "+34 600 000 001",
            country: "España",
            city: "Madrid"
        },
        {
            id: 2,
            email: "beatriz.lopez@example.com",
            name: "Beatriz López",
            password: "securePass456",
            address: "Av. Siempre Viva 742",
            phone: "+52 55 1234 5678",
            country: "México",
            city: "CDMX"
        },
        {
            id: 3,
            email: "carlos.perez@example.com",
            name: "Carlos Pérez",
            password: "carlos_secret",
            address: "Ruta 66, Km 10",
            phone: "+1 555-0199",
        },
        {
            id: 4,
            email: "daniela.martinez@example.com",
            name: "Daniela Martínez",
            password: "dani_password!",
            address: "Carrera 7 #45-12",
            phone: "+57 310 987 6543",
            country: "Colombia",
            city: "Bogotá"
        },
        {
            id: 5,
            email: "esteban.quito@example.com",
            name: "Esteban Quito",
            password: "esteban_admin",
            address: "Boulevard de los Sueños 99",
            phone: "+54 11 4444-5555",
            country: "Argentina"
        },
        {
            id: 6,
            email: "fernanda.ruiz@example.com",
            name: "Fernanda Ruiz",
            password: "fern_safe_2026",
            address: "Paseo de la Reforma 200",
            phone: "+52 55 8888 9999",
            country: "México",
            city: "Guadalajara"
        },
        {
            id: 7,
            email: "gerardo.suarez@example.com",
            name: "Gerardo Suárez",
            password: "gerar_pass_99",
            address: "Calle Falsa 123",
            phone: "+34 611 222 333",
        },
        {
            id: 8,
            email: "helena.troya@example.com",
            name: "Helena Troya",
            password: "troya_horse_44",
            address: "Avenida Grecia 500",
            phone: "+30 210 1234567",
            country: "Grecia",
            city: "Atenas"
        },
        {
            id: 9,
            email: "ivan.drago@example.com",
            name: "Ivan Drago",
            password: "must_break_you",
            address: "Plaza Roja 1",
            phone: "+7 495 000-00-00",
            country: "Rusia",
            city: "Moscú"
        },
        {
            id: 10,
            email: "julia.roberts@example.com",
            name: "Julia Roberts",
            password: "pretty_woman_88",
            address: "Hollywood Blvd 101",
            phone: "+1 213-555-0101",
            country: "USA",
            city: "Los Angeles"
        }
    ];
    findAll() {
        return this.users;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map