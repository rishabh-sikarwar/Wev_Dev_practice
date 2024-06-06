```assembly
; 8086 Assembly Language Program to Calculate Square Root
.MODEL SMALL
.DATA
    num DW ?
    result DW ?
    message1 DB "Enter a number: $"
    message2 DB 0DH, 0AH, "Square root of the number is: $"
.CODE
    MAIN PROC
        MOV AX, @DATA
        MOV DS, AX

        ; Display message to enter a number
        MOV AH, 09H
        LEA DX, message1
        INT 21H

        ; Read input number from the user
        MOV AH, 01H
        INT 21H
        SUB AL, 30H ; Convert ASCII to Binary
        MOV num, AX

        ; Calculate square root using algorithm (Example: Newton-Raphson)
        MOV AX, num
        XOR DX, DX ; Clear DX register
        MOV BX, 0001H ; Initial guess for square root
        MOV CX, 10 ; Number of iterations

    square_root_loop:
        MOV AX, BX
        IMUL BX ; AX = AX * BX
        SUB AX, num ; AX = AX - num
        MOV BX, 2
        IDIV BX ; AX = AX / 2
        MOV BX, AX ; Update guess
        DEC CX ; Decrement iteration count
        JNZ square_root_loop

        ; Store result in 'result' variable
        MOV result, BX

        ; Display result
        MOV AH, 09H
        LEA DX, message2
        INT 21H

        ; Display square root
        MOV AX, result
        ADD AX, 30H ; Convert Binary to ASCII
        MOV DL, AL
        MOV AH, 02H
        INT 21H

    MAIN ENDP
END MAIN
```
