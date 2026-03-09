# Smart-Parking-slot-Availability-And-Warning-System
**Repository Description (short GitHub description):**  Smart parking detection system using an HC-SR04 ultrasonic sensor and Arduino that monitors distance and indicates parking status with LEDs (green, yellow, red) and a buzzer for close-range alerts. 🚗📡
# Smart Parking Detection System using HC-SR04 and Arduino

## Overview
This project implements a **Smart Parking Detection System** using an **HC-SR04 ultrasonic sensor**, **LED indicators**, and a **buzzer** connected to an **Arduino board**. The system detects the distance between a vehicle and the sensor and provides visual and audio feedback to indicate whether a parking slot is free, approaching, or occupied.

It is a simple embedded systems project that demonstrates **distance sensing, real-time feedback, and basic automation for parking assistance**.


## Features
- Detects distance using the **HC-SR04 ultrasonic sensor**
- Provides **visual feedback with LEDs**
- Provides **audio alert with a buzzer**
- Indicates parking slot status:
  - **Green LED** → Parking slot free
  - **Yellow LED** → Vehicle approaching
  - **Red LED + Buzzer** → Slot occupied / vehicle very close
- Serial monitor displays **real-time distance measurements**


## Hardware Requirements
- Arduino Uno (or compatible board)
- HC-SR04 Ultrasonic Sensor
- 3 LEDs
  - Green LED
  - Yellow LED
  - Red LED
- 3 Resistors (220Ω recommended)
- Buzzer
- Breadboard
- Jumper wires



## Pin Configuration

| Component | Arduino Pin |
|----------|-------------|
| Trig Pin (HC-SR04) | 7 |
| Echo Pin (HC-SR04) | 6 |
| Green LED | 12 |
| Yellow LED | 11 |
| Red LED | 10 |
| Buzzer | 9 |



## System Logic

The system categorizes parking slot status based on distance:

| Distance | Status | Indicator |
|--------|--------|-----------|
| > 40 cm | Slot Free | Green LED |
| 20–40 cm | Vehicle Approaching | Yellow LED |
| ≤ 20 cm | Slot Occupied / Very Close | Red LED + Buzzer |


## How It Works

1. The **HC-SR04 sensor sends an ultrasonic pulse**.
2. The pulse reflects back when it hits an object.
3. The **echo time is measured**.
4. Distance is calculated using:
