// 1. I/O: Приветствие пользователя
const userName = prompt("Как вас зовут?", "Гость");
alert(`Добро пожаловать, ${userName}! Сейчас мы проанализируем время работы гаджетов.`);
console.log(`Пользователь ${userName} запустил анализ гаджетов.`);

const batteryLife = [12, 3, 18, 5, 24, 2, 10];

console.log("=== Исходные данные ===");
console.log("Время автономной работы гаджетов (часы):", batteryLife);
console.log("Количество устройств:", batteryLife.length);


// Функция поиска максимального значения в массиве
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Функция фильтрации: возвращает только элементы > threshold
function filterAbove(arr, threshold) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Функция подсчёта суммы всех элементов массива
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Функция подсчёта среднего значения
function calculateAverage(arr) {
    const sum = calculateSum(arr);
    return sum / arr.length;
}


const maxBattery = findMax(batteryLife);
console.log("\n=== Результаты анализа ===");
console.log("Максимальное время работы:", maxBattery, "часов");

const longLifeDevices = filterAbove(batteryLife, 8);
console.log("Устройства-долгожители (> 8 часов):", longLifeDevices);
console.log("Количество долгожителей:", longLifeDevices.length);

const averageBattery = calculateAverage(batteryLife);
console.log("Среднее время работы:", averageBattery.toFixed(2), "часов");

let lowBatteryCount = 0;

for (let i = 0; i < batteryLife.length; i++) {
    if (batteryLife[i] <= 4) {
        lowBatteryCount++;
        console.log(`Устройство #${i + 1}: ${batteryLife[i]} часов — малое время работы`);
    }
}

const lowBatteryShare = (lowBatteryCount / batteryLife.length) * 100;
console.log("\nУстройства с малым временем работы (≤ 4 часов):");
console.log("Количество:", lowBatteryCount);
console.log("Доля от общего числа:", lowBatteryShare.toFixed(1), "%");

if (averageBattery < 6) {
    console.log("\n️ Внимание: Среднее время работы меньше 6 часов!");
    console.log("Стоит обратить внимание на энергоэффективность устройств.");
} else {
    console.log("\nСреднее время работы приемлемое (≥ 6 часов).");
}

alert(
    `Среднее время работы – ${averageBattery.toFixed(1)} часов\n` +
    `${longLifeDevices.length} устройств – долгожители (> 8 часов)`
);

console.log("\n=== Анализ завершён ===");
console.log(`Спасибо за использование, ${userName}!`);