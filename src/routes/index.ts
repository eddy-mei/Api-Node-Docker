import express from "express";
import PingController from "../controllers/ping";

const router = express.Router();

router.get("/ping", async (req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

//for the sake of test, add another route here
router.get("/pong", async (req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage("pong");
    return res.send(response);
});
export default router;