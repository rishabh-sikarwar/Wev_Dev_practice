import numpy as np
import matplotlib.pyplot as plt

# Signal parameters
N = 1024  # Length of signal
t = np.arange(N) / 4.0  # Time vector (sampling rate = 4 Hz)
x = np.cos(2 * np.pi * t)  # Continuous signal

# Quantize signal
xi = np.round(15 * x)  # Quantization index (16 levels)
xQ = xi / 15.0  # Quantized signal
e = xQ - x  # Quantization error

# Plot quantized signals
fig, ax1 = plt.subplots(figsize=(10, 4))
ax2 = ax1.twinx()

# Plot continuous signal
ax1.plot(t, x, label="Continuous Signal", color="b")
ax1.set_xlabel("Time (seconds)")
ax1.set_ylabel("Amplitude", color="b")
ax1.tick_params(axis="y", labelcolor="b")

# Plot quantized signal
ax2.stem(t, xQ, markerfmt="ro", basefmt=" ", linefmt="r-", label="Quantized Signal")
ax2.set_ylabel("Quantized Value", color="r")
ax2.tick_params(axis="y", labelcolor="r")

plt.title("Quantization of a Sine Signal")
plt.grid(True)
plt.legend()
plt.show()
