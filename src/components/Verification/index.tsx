"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Wrapper from "../Wrapper";
import Button from "../Button";

export default function Verification() {
    const router = useRouter();
    const length = 4;
    const [code, setCode] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (i: number) => {
        const el = inputRefs.current[i];
        if (el) {
            el.focus();
            el.select(); // انتخاب متن برای overwrite سریع
        }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const digits = raw.replace(/\D/g, ""); // فقط ارقام نگه داشته میشه

        if (!digits) {
            // خالی شد (پاک کردن با کیبورد یا حذف دستی)
            const next = [...code];
            next[index] = "";
            setCode(next);
            return;
        }

        if (digits.length === 1) {
            // حالت معمول: یک رقم وارد شده
            const next = [...code];
            next[index] = digits;
            setCode(next);
            if (index < length - 1) focusInput(index + 1);
            return;
        }

        // اگر چند کاراکتر (مثلاً paste ناموفق) به onChange رسید — آن را مثل paste هندل کن
        handlePasteValue(index, digits);
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault(); // ما خودمون پاک کردیم/کنترل می‌کنیم
            const next = [...code];

            if (code[index]) {
                // اگر در این input مقداری هست -> پاکش کن (و در همون input بمون)
                next[index] = "";
                setCode(next);
            } else if (index > 0) {
                // اگر خالیه و بک‌اسپیس زدی -> برو به قبلی و اون رو پاک کن
                next[index - 1] = "";
                setCode(next);
                focusInput(index - 1);
            }
        } else if (e.key === "ArrowLeft" && index > 0) {
            e.preventDefault();
            focusInput(index - 1);
        } else if (e.key === "ArrowRight" && index < length - 1) {
            e.preventDefault();
            focusInput(index + 1);
        }
    };

    const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const paste = e.clipboardData.getData("text").replace(/\D/g, "");
        if (!paste) return;
        handlePasteValue(index, paste);
    };

    const handlePasteValue = (startIndex: number, paste: string) => {
        const next = [...code];
        for (let i = 0; i < paste.length && startIndex + i < length; i++) {
            next[startIndex + i] = paste[i];
        }
        setCode(next);
        // فوکوس رو بذار روی آخرین خانه‌ای که پر شد
        const last = Math.min(length - 1, startIndex + paste.length - 1);
        focusInput(last);
    };

    const handleVerify = () => {
        const full = code.join("");
        if (full.length === length) {
            router.push("/home-page");
        } else {
            alert("Please enter the full code");
        }
    };

    return (
        <Wrapper>
            <div className="w-full flex justify-between items-center">
                <span>CODE</span>
                <div className="flex items-center">
                    <Button className="text-black underline font-bold" label={"Resend"} />
                    <span>in.50sec</span>
                </div>
            </div>

            <div className="flex w-full justify-evenly my-4">
                {code.map((digit, idx) => (
                    <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        value={digit}
                        onChange={(e) => handleChange(idx, e)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        onPaste={(e) => handlePaste(idx, e)}
                        inputMode="numeric"      // موبایل: کیبورد عددی
                        pattern="[0-9]*"
                        maxLength={1}
                        className="w-[62px] h-[62px] text-center text-xl border rounded"
                        // type="text" بهتر از "number" چون مدیریت ساده‌تره
                        type="text"
                        autoComplete="one-time-code"
                    />
                ))}
            </div>

            <Button
                className="text-white font-bold bg-[#FF7622] w-[327px]"
                label={"VERIFY"}
                onClick={handleVerify}
            />
        </Wrapper>
    );
}
