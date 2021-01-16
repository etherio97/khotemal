import { Router } from "express";
import Hero from "../../src/Hero";

const router = Router();

router.get("/", async (req, res) => {
  res.json(await Hero.all());
});

export default router;
