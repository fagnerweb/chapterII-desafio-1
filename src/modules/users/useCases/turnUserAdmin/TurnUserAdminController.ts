import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.params;
            const userAdmin = this.turnUserAdminUseCase.execute({ user_id });

            return response.json(userAdmin);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { TurnUserAdminController };
