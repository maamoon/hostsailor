import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { 
  Mail, 
  Search, 
  ChevronDown, 
  ChevronRight,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HomeHeader = () => {
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

  interface NavItem {
    key: string;
    label: string;
    href?: string;
    external?: boolean;
    items?: NavItem[];
  }

  const navigationItems: NavItem[] = [
    {
      key: 'products',
      label: t('navigation.products.title'),
      items: [
        {
          key: 'sharedHosting',
          label: t('navigation.products.sharedHosting.title'),
          items: [
                         { key: 'ssdHosting', label: t('navigation.products.sharedHosting.ssdHosting'), href: '#/hosting/ssd-shared-hosting' },
             { key: 'resellerHosting', label: t('navigation.products.sharedHosting.resellerHosting'), href: '#/hosting/reseller-hosting' },
            {
              key: 'vpsResellerProgram',
              label: t('navigation.products.sharedHosting.vpsResellerProgram'),
              href: '#/vps/reseller-program'
            }
        ]
      },
      {
        key: 'dedicatedServers',
        label: t('navigation.products.dedicatedServers.title'),
                     href: '#/dedicated/servers',
           items: [
             { key: 'supermicroRo', label: t('navigation.products.dedicatedServers.supermicroRo'), href: '#/dedicated/supermicro-romania' },
             { key: 'hpNl', label: t('navigation.products.dedicatedServers.hpNl'), href: '#/dedicated/hp-netherlands' },
             { key: 'fujitsuNl', label: t('navigation.products.dedicatedServers.fujitsuNl'), href: '#/dedicated/hp-netherlands' }
          ]
        },
      {
        key: 'colocation',
        label: t('navigation.products.colocation'),
        href: '#/services/colocation'
      },
      {
        key: 'hotDeals',
        label: t('navigation.products.hotDeals'),
        href: '#/deals/hot-deals'
      },
      {
        key: 'vps',
        label: t('navigation.products.vps.title'),
        href: '#/vps/hosting',
        items: [
          { key: 'openvzHdd', label: t('navigation.products.vps.openvzHdd'), href: '#/vps/openvz-vps-hdd' },
          { key: 'openvzSsd', label: t('navigation.products.vps.openvzSsd'), href: '#/vps/openvz-vps-ssd' },
          { key: 'kvmNvme', label: t('navigation.products.vps.kvmNvme'), href: '#/vps/kvm-vps-nvme' },
          { key: 'kvmSsd', label: t('navigation.products.vps.kvmSsd'), href: '#/vps/kvm-vps' },
          { key: 'storageVps', label: t('navigation.products.vps.storageVps'), href: '#/vps/storage-kvm-vps' }
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
                     href: '#/services/domain-registration',
           items: [
             { key: 'register', label: t('navigation.services.domainRegistration.register'), href: '#/services/domain-registration' },
             { key: 'transfer', label: t('navigation.services.domainRegistration.transfer'), href: '#/services/domain-registration' }
          ]
        },
                 { key: 'sslCertificates', label: t('navigation.services.sslCertificates'), href: '#/services/ssl-certificates' },
         { key: 'vlanNetwork', label: t('navigation.services.vlanNetwork'), href: '#/services/vlan-network' },
         { key: 'ipAnnouncement', label: t('navigation.services.ipAnnouncement'), href: '#/tools/ip-announcement' }
      ]
    },
    {
      key: 'partners',
      label: t('navigation.partners.title'),
      items: [
                 { key: 'affiliateProgram', label: t('navigation.partners.affiliateProgram'), href: '#/programs/affiliate' },
         { key: 'resellerProgram', label: t('navigation.partners.resellerProgram'), href: '#/programs/reseller' },
         { key: 'bugBountyProgram', label: t('navigation.partners.bugBountyProgram'), href: '#/programs/bug-bounty' }
      ]
    },
    {
      key: 'tools',
      label: t('navigation.tools.title'),
      items: [
                 { key: 'networkStatus', label: t('navigation.tools.networkStatus'), href: '#/tools/network-status' },
         { key: 'lookingGlass', label: t('navigation.tools.lookingGlass'), href: '#/tools/looking-glass' },
        { key: 'knowledgeBase', label: t('navigation.tools.knowledgeBase'), href: 'https://clients.hostsailor.com/index.php?rp=/knowledgebase', external: true },
        { key: 'tools', label: t('navigation.tools.tools'), href: 'http://web.hostsailor.com/tools', external: true },
        { key: 'faqs', label: t('navigation.tools.faqs'), href: '#/support/faqs' }
      ]
    },
    {
      key: 'aboutUs',
      label: t('navigation.aboutUs.title'),
      items: [
        { key: 'ourCompany', label: t('navigation.aboutUs.ourCompany'), href: '#/company/our-company' },
        { key: 'blog', label: t('navigation.aboutUs.blog'), href: 'https://web.hostsailor.com/blog', external: true },
        {
          key: 'dataCenters',
          label: t('navigation.aboutUs.dataCenters.title'),
          items: [
                    { key: 'usLa', label: t('navigation.aboutUs.dataCenters.usLa'), href: '#/datacenters/los-angeles' },
        { key: 'netherlandsAms', label: t('navigation.aboutUs.dataCenters.netherlandsAms'), href: '#/datacenters/netherlands' },
        { key: 'romaniaBucharest', label: t('navigation.aboutUs.dataCenters.romaniaBucharest'), href: '#/datacenters/romania' }
          ]
        },
        { key: 'privacyPolicy', label: t('navigation.aboutUs.privacyPolicy'), href: '#/legal/privacy-policy' },
        { key: 'termsOfService', label: t('navigation.aboutUs.termsOfService'), href: '#/legal/terms-of-service' },
        { key: 'acceptableUsePolicy', label: t('navigation.aboutUs.acceptableUsePolicy'), href: '#/legal/acceptable-use-policy' },
        { key: 'serviceLevelAgreement', label: t('navigation.aboutUs.serviceLevelAgreement'), href: '#/legal/service-level-agreement' },
        { key: 'contactUs', label: t('navigation.aboutUs.contactUs'), href: '#/support/contact' }
      ]
    },
    {
      key: 'bitcoinAltcoins',
      label: t('home.bitcoinAltcoins'),
      href: '#/how-to-pay-with-cryptocurrencies'
    }
  ];

  const renderMenuItem = (item: NavItem, level = 0) => {
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
            {item.items?.map((subItem) => renderMenuItem(subItem, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="fixed top-0 w-full z-50" ref={dropdownRef}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{t('home.topBarEmail')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/HostSailor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/hostsailor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/hostsailor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
                             <img src="/hostsailor/logo.svg" alt="HOSTSAILOR" className="h-10 w-auto" />
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
                      <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    ) : (
                      <Link 
                        to={item.href || '#'} 
                        className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                    
                    {hasSubItems && isOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg min-w-48 z-50"
                        onMouseEnter={() => handleDropdownMenuEnter(item.key)}
                        onMouseLeave={handleDropdownMenuLeave}
                      >
                        <ul className="py-2">
                          {item.items?.map((subItem) => renderMenuItem(subItem))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* Login/Register Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://clients.hostsailor.com/login.php" target="_blank" rel="noopener noreferrer">
                    {t('common.login')}
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="https://clients.hostsailor.com/register.php" target="_blank" rel="noopener noreferrer">
                    {t('common.register')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
