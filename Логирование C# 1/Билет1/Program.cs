// Настройка Serilog
using Serilog;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug() // Минимальный уровень логгирования
    .WriteTo.Console()    // Вывод в консоль
    .WriteTo.File("log.txt", rollingInterval: RollingInterval.Day) // Запись в файл
    .CreateLogger();

try
{
    Log.Information("Запуск приложения...");

    // Примеры различных уровней логгирования
    Log.Debug("Это сообщение уровня Debug");
    Log.Information("Это сообщение уровня Information");
    Log.Warning("Это сообщение уровня Warning");
    Log.Error("Это сообщение уровня Error");

    // Имитация ошибки
    throw new Exception("Тестовая ошибка для журналирования");
}
catch (Exception ex)
{
    // Логирование исключения
    Log.Error(ex, "Произошла ошибка в приложении");
}
finally
{
    // Закрытие логгера (важно для записи в файл)
    Log.CloseAndFlush();
}

Console.WriteLine("Проверьте файл log.txt в папке с приложением");
Console.ReadKey();