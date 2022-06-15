import { Router } from "express";
import { login, register } from "../controller/authController";
// import { protect } from "../middleware/auth";

const router = Router({ mergeParams: true });

router.post("/register", register);
router.post("/login", login);

export = router;
