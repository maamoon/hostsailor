import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { 
  ChevronDown, 
  ChevronRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // إغلاق القوائم عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // تنظيف timeout عند إزالة المكون
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownEnter = (key: string) => {
    clearTimeoutRef();
    setOpenDropdown(key);
    setOpenSubMenu(null);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!openSubMenu) {
        setOpenDropdown(null);
      }
    }, 200);
  };

  const handleSubMenuEnter = (key: string) => {
    clearTimeoutRef();
    setOpenSubMenu(key);
  };

  const handleSubMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubMenu(null);
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownMenuEnter = (key: string) => {
    clearTimeoutRef();
    setOpenDropdown(key);
  };

  const handleDropdownMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!openSubMenu) {
        setOpenDropdown(null);
      }
    }, 200);
  };

  const navigationItems = [
    {
      key: 'products',
      label: t('navigation.products.title'),
      items: [
        {
          key: 'sharedHosting',
          label: t('navigation.products.sharedHosting.title'),
          items: [
            { key: 'ssdHosting', label: t('navigation.products.sharedHosting.ssdHosting'), href: '/ssd-shared-hosting' },
            { key: 'resellerHosting', label: t('navigation.products.sharedHosting.resellerHosting'), href: '/reseller-hosting' }
          ]
        },
        {
          key: 'dedicatedServers',
          label: t('navigation.products.dedicatedServers.title'),
          href: '/dedicated-servers',
          items: [
            { key: 'supermicroRo', label: t('navigation.products.dedicatedServers.supermicroRo'), href: '/dedicated-servers/supermicro-romania-dedicated-servers' },
            { key: 'hpNl', label: t('navigation.products.dedicatedServers.hpNl'), href: '/dedicated-servers/hp-netherlands-dedicated-servers' },
            { key: 'fujitsuNl', label: t('navigation.products.dedicatedServers.fujitsuNl'), href: '/nl-dedicated-servers' }
          ]
        },
        {
          key: 'colocation',
          label: 'Colocation',
          href: '/colocation'
        },
        {
          key: 'hotDeals',
          label: 'Hot Deals',
          href: '/hot-deals'
        },
        {
          key: 'vps',
          label: t('navigation.products.vps.title'),
          href: '/vps/hosting',
          items: [
            { key: 'openvzHdd', label: 'OpenVZ VPS HDD', href: '/vps/openvz-vps-hdd' },
            { key: 'openvzSsd', label: 'OpenVZ VPS SSD', href: '/vps/openvz-vps-ssd' },
            { key: 'kvmNvme', label: t('navigation.products.vps.kvmNvme'), href: '/vps/kvm-vps-nvme' },
            { key: 'kvmSsd', label: t('navigation.products.vps.kvmSsd'), href: '/vps/kvm-vps' },
            { key: 'storageVps', label: t('navigation.products.vps.storageVps'), href: '/vps/storage-kvm-vps' }
          ]
        }
      ]
    },
    {
      key: 'services',
      label: t('navigation.services.title'),
      items: [
        {
          key: 'domainRegistration',
          label: t('navigation.services.domainRegistration.title'),
          href: '/domain-registration',
          items: [
            { key: 'register', label: t('navigation.services.domainRegistration.register'), href: '/domain-registration' },
            { key: 'transfer', label: t('navigation.services.domainRegistration.transfer'), href: '/domain-registration' }
          ]
        },
        { key: 'sslCertificates', label: t('navigation.services.sslCertificates'), href: '/ssl-certificates' },
        { key: 'vlanNetwork', label: t('navigation.services.vlanNetwork'), href: '/vlan-network' },
        { key: 'ipAnnouncement', label: t('navigation.services.ipAnnouncement'), href: '/ip-announcement' }
      ]
    },
    {
      key: 'partners',
      label: t('navigation.partners.title'),
      items: [
        { key: 'affiliateProgram', label: t('navigation.partners.affiliateProgram'), href: '/affiliate-program' },
        { key: 'resellerProgram', label: t('navigation.partners.resellerProgram'), href: '/reseller-program' },
        { key: 'bugBountyProgram', label: t('navigation.partners.bugBountyProgram'), href: '/bug-bounty-programme' }
      ]
    },
    {
      key: 'tools',
      label: t('navigation.tools.title'),
      items: [
        { key: 'networkStatus', label: t('navigation.tools.networkStatus'), href: 'https://stats.hostsailor.com/', external: true },
        { key: 'lookingGlass', label: t('navigation.tools.lookingGlass'), href: '/looking-glass' },
        { key: 'knowledgeBase', label: t('navigation.tools.knowledgeBase'), href: 'https://clients.hostsailor.com/index.php?rp=/knowledgebase', external: true },
        { key: 'tools', label: t('navigation.tools.tools'), href: 'http://web.hostsailor.com/tools', external: true },
        { key: 'faqs', label: t('navigation.tools.faqs'), href: '/faqs' }
      ]
    },
    {
      key: 'aboutUs',
      label: t('navigation.aboutUs.title'),
      items: [
        { key: 'ourCompany', label: t('navigation.aboutUs.ourCompany'), href: '/our-company' },
        { key: 'blog', label: t('navigation.aboutUs.blog'), href: 'https://web.hostsailor.com/blog', external: true },
        {
          key: 'dataCenters',
          label: t('navigation.aboutUs.dataCenters.title'),
          items: [
            { key: 'usLa', label: t('navigation.aboutUs.dataCenters.usLa'), href: '/data-centers-in-lax-los-angeles' },
            { key: 'netherlandsAms', label: t('navigation.aboutUs.dataCenters.netherlandsAms'), href: '/data-center/netherlands' },
            { key: 'romaniaBucharest', label: t('navigation.aboutUs.dataCenters.romaniaBucharest'), href: '/data-center/romania' }
          ]
        },
        { key: 'privacyPolicy', label: t('navigation.aboutUs.privacyPolicy'), href: '/privacy-policy' },
        { key: 'termsOfService', label: t('navigation.aboutUs.termsOfService'), href: '/terms-of-service' },
        { key: 'acceptableUsePolicy', label: t('navigation.aboutUs.acceptableUsePolicy'), href: '/acceptable-use-policy' },
        { key: 'serviceLevelAgreement', label: t('navigation.aboutUs.serviceLevelAgreement'), href: '/service-level-agreement' },
        { key: 'contactUs', label: t('navigation.aboutUs.contactUs'), href: '/contact' }
      ]
    }
  ];

  const renderMenuItem = (item: any, level: number = 0) => {
    const hasSubItems = item.items && item.items.length > 0;
    const isOpen = openSubMenu === item.key;
    const isExternal = item.external;

    return (
      <li key={item.key} className="relative group">
        {hasSubItems ? (
          <div
            onMouseEnter={() => handleSubMenuEnter(item.key)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <span>{item.label}</span>
            <ChevronRight className={`h-4 w-4 ${document.documentElement.dir === 'rtl' ? 'rotate-180' : ''}`} />
          </div>
        ) : (
          <a
            href={item.href || '#'}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            <span>{item.label}</span>
          </a>
        )}
        
        {hasSubItems && isOpen && (
          <ul 
            className={`absolute top-0 bg-white border border-gray-200 rounded-md shadow-lg min-w-48 z-50 ${
              document.documentElement.dir === 'rtl' ? 'right-full' : 'left-full'
            }`}
            onMouseEnter={() => handleSubMenuEnter(item.key)}
            onMouseLeave={handleSubMenuLeave}
          >
            {item.items.map((subItem: any) => renderMenuItem(subItem, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border" ref={dropdownRef}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="HOSTSAILOR" className="h-8 w-auto" />
          </Link>
          
          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const hasSubItems = item.items && item.items.length > 0;
              const isOpen = openDropdown === item.key;

              return (
                <div 
                  key={item.key} 
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(item.key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {hasSubItems ? (
                    <div className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''} ${document.documentElement.dir === 'rtl' ? 'rotate-180' : ''}`} />
                    </div>
                  ) : (
                    <Link
                      to={item.href || '#'}
                      className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                  
                                     {hasSubItems && isOpen && (
                     <div 
                       className={`absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg min-w-48 z-50 ${
                         document.documentElement.dir === 'rtl' ? 'right-0' : 'left-0'
                       }`}
                       onMouseEnter={() => handleDropdownMenuEnter(item.key)}
                       onMouseLeave={handleDropdownMenuLeave}
                     >
                       <ul className="py-2">
                         {item.items.map((subItem: any) => renderMenuItem(subItem))}
                       </ul>
                     </div>
                   )}
                </div>
              );
            })}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <a href="https://clients.hostsailor.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost">{t('common.login')}</Button>
          </a>
          <a href="https://clients.hostsailor.com/register.php" target="_blank" rel="noopener noreferrer">
            <Button>{t('common.register')}</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
