import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfUseUA = () => {
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
          Умови використання
        </h1>
        <p className="text-muted-foreground mb-8">
          Останнє оновлення: 8 січня 2026 року
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Прийняття умов</h2>
            <p className="text-muted-foreground mb-4">
              Використовуючи мобільний застосунок citi.app ("Застосунок"), ви погоджуєтесь дотримуватись цих Умов використання. Якщо ви не погоджуєтесь з цими умовами, будь ласка, не використовуйте Застосунок.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Опис сервісу</h2>
            <p className="text-muted-foreground mb-4">
              citi.app — це мобільний застосунок, який надає доступ до міських сервісів, включаючи, але не обмежуючись:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Інформацію про громадський транспорт та паркування</li>
              <li>Оплату комунальних послуг та передачу показників лічильників</li>
              <li>Подання петицій та звернень до міської влади</li>
              <li>Перегляд міських подій та новин</li>
              <li>Отримання сповіщень від міських служб</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Обов'язки користувача</h2>
            <p className="text-muted-foreground mb-4">Використовуючи Застосунок, ви погоджуєтесь:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Надавати точну та актуальну інформацію при реєстрації</li>
              <li>Забезпечувати конфіденційність своїх облікових даних</li>
              <li>Не використовувати Застосунок для незаконних цілей</li>
              <li>Не намагатись отримати несанкціонований доступ до системи</li>
              <li>Не порушувати права інших користувачів</li>
              <li>Повідомляти про будь-які порушення безпеки</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Інтелектуальна власність</h2>
            <p className="text-muted-foreground mb-4">
              Усі права на Застосунок, включаючи дизайн, код, логотипи та контент, належать citi.app або його ліцензіарам. Ви не маєте права копіювати, модифікувати чи розповсюджувати будь-яку частину Застосунку без нашого письмового дозволу.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Обмеження відповідальності</h2>
            <p className="text-muted-foreground mb-4">
              Застосунок надається "як є" без будь-яких гарантій. Ми не несемо відповідальності за:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Перерви в роботі сервісу або технічні збої</li>
              <li>Втрату даних або пошкодження інформації</li>
              <li>Дії третіх осіб або зовнішніх сервісів</li>
              <li>Непрямі, випадкові або наслідкові збитки</li>
              <li>Точність інформації, наданої міськими службами</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Доступність сервісу</h2>
            <p className="text-muted-foreground mb-4">
              Ми докладаємо зусиль для забезпечення безперервної роботи Застосунку, однак не гарантуємо постійну доступність. Ми залишаємо за собою право:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Тимчасово призупиняти роботу для технічного обслуговування</li>
              <li>Змінювати або припиняти будь-які функції без попереднього повідомлення</li>
              <li>Обмежувати доступ до певних функцій у певних регіонах</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Зміни до умов</h2>
            <p className="text-muted-foreground mb-4">
              Ми можемо оновлювати ці Умови використання час від часу. Продовжуючи використовувати Застосунок після внесення змін, ви погоджуєтесь з оновленими умовами.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Застосовне право</h2>
            <p className="text-muted-foreground mb-4">
              Ці Умови використання регулюються законодавством України. Будь-які спори вирішуються у відповідних судах України.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Зв'язок з нами</h2>
            <p className="text-muted-foreground mb-4">
              Якщо у вас є питання щодо цих Умов використання, зверніться до нас:
            </p>
            <p className="text-primary font-medium">
              contact@citi.top
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseUA;
