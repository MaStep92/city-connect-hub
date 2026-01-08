import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicyUA = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to Ukrainian when viewing this page
  setLanguage('uk');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            На головну
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Політика конфіденційності
        </h1>
        <p className="text-muted-foreground mb-8">
          Останнє оновлення: 8 січня 2026 року
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Вступ</h2>
            <p className="text-muted-foreground mb-4">
              SmartCity ("ми", "наш" або "застосунок") поважає вашу конфіденційність та зобов'язується захищати ваші персональні дані. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо вашу інформацію при використанні нашого мобільного застосунку.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Дані, які ми збираємо</h2>
            <p className="text-muted-foreground mb-4">Ми можемо збирати наступні типи інформації:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Контактна інформація:</strong> адреса електронної пошти, номер телефону</li>
              <li><strong>Дані облікового запису:</strong> ім'я, прізвище, вибране місто</li>
              <li><strong>Дані про використання:</strong> інформація про те, як ви взаємодієте з застосунком</li>
              <li><strong>Інформація про пристрій:</strong> тип пристрою, операційна система, унікальні ідентифікатори</li>
              <li><strong>Дані про місцезнаходження:</strong> з вашої згоди, для надання послуг на основі геолокації</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Як ми використовуємо ваші дані</h2>
            <p className="text-muted-foreground mb-4">Ми використовуємо зібрану інформацію для:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Надання та обслуговування нашого застосунку</li>
              <li>Автентифікації та управління вашим обліковим записом</li>
              <li>Надсилання сповіщень про міські послуги та події</li>
              <li>Покращення та персоналізації вашого досвіду користування</li>
              <li>Аналізу використання для покращення наших послуг</li>
              <li>Зв'язку з вами щодо оновлень та важливих повідомлень</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Сторонні сервіси</h2>
            <p className="text-muted-foreground mb-4">
              Ми можемо використовувати сторонні сервіси для:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Аналітики (для розуміння використання застосунку)</li>
              <li>Push-сповіщень (для надсилання вам важливих оновлень)</li>
              <li>Обробки платежів (для комунальних послуг)</li>
              <li>Автентифікації (для безпечного входу)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Ці сервіси мають власні політики конфіденційності та можуть збирати інформацію відповідно до їхніх практик.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Захист даних</h2>
            <p className="text-muted-foreground mb-4">
              Ми вживаємо відповідних технічних та організаційних заходів для захисту ваших персональних даних від несанкціонованого доступу, зміни, розкриття або знищення. Ваші дані передаються через захищені з'єднання та зберігаються на захищених серверах.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Ваші права</h2>
            <p className="text-muted-foreground mb-4">Ви маєте право:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Отримати доступ до ваших персональних даних</li>
              <li>Виправити неточну інформацію</li>
              <li>Вимагати видалення ваших даних</li>
              <li>Заперечити проти обробки ваших даних</li>
              <li>Відкликати згоду в будь-який час</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Продаж даних</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Ми не продаємо ваші персональні дані третім особам.</strong> Ваша інформація використовується виключно для надання та покращення наших послуг.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Зв'язок з нами</h2>
            <p className="text-muted-foreground mb-4">
              Якщо у вас є питання щодо цієї Політики конфіденційності або ваших персональних даних, зверніться до нас:
            </p>
            <p className="text-primary font-medium">
              contact@smartcity.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyUA;
