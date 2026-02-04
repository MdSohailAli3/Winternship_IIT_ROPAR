import "express";

declare global {
    namespace Express {
        interface Request {
            dischargeLog?: {
                step: string;
                time: string;
            }[];
        }
    }
}

export { };
