import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">SecureMail</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Функции
              </a>
              <a
                href="#security"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Безопасность
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Вход
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Новое поколение почты
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Безопасная почта для современного мира
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Защищенная связь с шифрованием, интеграцией с календарем и
                  облачным хранилищем. Создайте свой аккаунт и получите полный
                  контроль над вашей перепиской.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                >
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Создать аккаунт
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/img/c7c8abd8-4a02-4c30-8c4f-5f86244107a2.jpg"
                  alt="SecureMail Interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Все инструменты в одном месте
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный набор современных функций для эффективной работы с
              электронной почтой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Шифрование E2E</CardTitle>
                <CardDescription>
                  Сквозное шифрование всех сообщений для максимальной
                  безопасности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">
                  Интеграция с календарем
                </CardTitle>
                <CardDescription>
                  Синхронизация с вашим календарем для удобного планирования
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cloud" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Облачное хранилище</CardTitle>
                <CardDescription>
                  Безлимитное хранилище для ваших файлов и вложений
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-red-600" />
                </div>
                <CardTitle className="text-xl">Антиспам защита</CardTitle>
                <CardDescription>
                  Интеллектуальные фильтры для защиты от спама и вирусов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="Smartphone"
                    size={24}
                    className="text-orange-600"
                  />
                </div>
                <CardTitle className="text-xl">Мобильное приложение</CardTitle>
                <CardDescription>
                  Доступ к почте с любого устройства в любое время
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-teal-600" />
                </div>
                <CardTitle className="text-xl">Быстрая синхронизация</CardTitle>
                <CardDescription>
                  Мгновенная синхронизация между всеми вашими устройствами
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Безопасность превыше всего
                </Badge>
                <h2 className="text-4xl font-bold">
                  Ваша приватность — наш приоритет
                </h2>
                <p className="text-xl text-slate-300">
                  Используем самые современные технологии шифрования и
                  двухфакторную аутентификацию для максимальной защиты ваших
                  данных.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Lock" size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Двухфакторная аутентификация
                    </h3>
                    <p className="text-slate-400">
                      Дополнительный уровень защиты с использованием SMS или
                      приложения-аутентификатора
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Key" size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Шифрование AES-256
                    </h3>
                    <p className="text-slate-400">
                      Военный стандарт шифрования для защиты ваших сообщений и
                      файлов
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Activity" size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Мониторинг активности
                    </h3>
                    <p className="text-slate-400">
                      Отслеживание подозрительной активности и уведомления о
                      входах
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Статус безопасности</span>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      Активно
                    </Badge>
                  </div>
                  <Separator className="bg-white/10" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Шифрование</span>
                      <span className="text-green-400">AES-256</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">2FA</span>
                      <span className="text-green-400">Включено</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Антиспам</span>
                      <span className="text-green-400">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Готовы начать безопасную переписку?
            </h2>
            <p className="text-xl opacity-90">
              Присоединяйтесь к тысячам пользователей, которые уже выбрали
              SecureMail для защищенной коммуникации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Создать бесплатный аккаунт
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">SecureMail</span>
              </div>
              <p className="text-slate-400">
                Безопасная почта для современного мира
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Продукт</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Функции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Поддержка</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Статус
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пресса
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">
              © 2024 SecureMail. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
