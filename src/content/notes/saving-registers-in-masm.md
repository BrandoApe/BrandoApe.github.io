---
title: Saving registers in MASM procedures
description: How PUSH/POP, PUSHAD/POPAD, PROTO, and INVOKE keep a procedure from wrecking its caller's registers.
date: 2026-06-05
tags: [assembly]
---

In 32-bit x86 assembly, every procedure shares the same registers. If a procedure changes EAX and the caller still needs EAX, the caller's value is gone. The fix is to save each register you change and restore it before `ret`.

Here is a procedure that prints one register's name and value:

```asm
showRegister PROC, regName:PTR BYTE, regValue:DWORD
    push eax            ; save the registers this procedure changes
    push edx

    mov  edx, regName   ; writeString prints the string at EDX
    call writeString
    mov  eax, regValue  ; writeHex prints EAX in hex
    call writeHex

    pop  edx            ; restore in the reverse order
    pop  eax
    ret
showRegister ENDP
```

## What I learned writing it

- **Pop in the reverse order of push.** The stack is last in, first out.
- **`PUSHAD` and `POPAD` save and restore all eight general-purpose registers at once.** They are convenient in a procedure that calls many others, but they use 32 bytes of stack.
- **`PROTO` declares a procedure's parameters.** With it, `INVOKE` checks the arguments and pushes them for you. Without it, you push each argument yourself and use `call`.
- **A procedure with parameters gets a stack frame.** MASM adds `push ebp` and `mov ebp, esp` at the start and reads each parameter at an offset from EBP. With the STDCALL convention, `ret` also removes the arguments from the stack.
- **`ADDR` and `OFFSET` both give an address.** `OFFSET` works anywhere, but only for global data. `ADDR` works only in an `INVOKE`, and it also works for local variables.
