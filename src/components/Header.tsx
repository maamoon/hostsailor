import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
          <img src="/hostsailor/logo.svg" alt="HOSTSAILOR" className="h-8 w-auto" />
        </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.hosting')}
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors">VPS</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.dedicated')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.domains')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              {t('navigation.support')}
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Link to="/login">
            <Button variant="ghost">{t('common.login')}</Button>
          </Link>
          <Link to="/register">
            <Button>{t('common.register')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;