import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
    TbBrandTypescript,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandJavascript,
    TbBrandReact,
    TbBrandReactNative,
    TbBrandNodejs,
    TbBrandMysql,
    TbBrandMongodb,
    TbBrandPrisma,
    TbBrandTailwind,
    TbBrandBootstrap,
    TbBrandNextjs,
    TbBrandFigma,
    TbBrandPython,
    TbBrandGit,
    TbBrandGithub,
    TbBrandVscode,
    TbBrandThreejs,
    TbBrandRedux,
} from 'react-icons/tb';
import {
    SiNestjs,
    SiExpress,
    SiWebstorm,
    SiPostgresql,
    SiPostman,
    SiAndroidstudio,
    SiXcode,
    SiLinux,
    SiNeovim,
    SiIterm2,
    SiReactquery,
    SiPycharm,
    SiIntellijidea,
} from 'react-icons/si';
import { PiCirclesThreePlusFill } from 'react-icons/pi';

export const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Skills', link: '/skills' },
    { title: 'Projects', link: '/projects' },
    { title: 'Articles', link: '/articles' },
    { title: 'Uses', link: '/uses' },
] as const;

export const socialLinks = [
    { title: 'facebook', link: 'https://www.facebook.com/yehtetaungxzen', icon: FaFacebook },
    { title: 'github', link: 'https://github.com/yellhtetaung', icon: FaGithub },
    { title: 'instagram', link: 'https://www.instagram.com/yehtetaungxzen', icon: FaInstagram },
    { title: 'linkedIn', link: 'https://www.linkedin.com/in/yehtetaungxzen', icon: FaLinkedin },
] as const;

export const educations = [
    { school: 'Bago University', courses: ['First Year History Specialization ( Distance )'] },
    { school: 'Bright Technology Myanmar', courses: ['Web Essential Course'] },
    {
        school: 'Data Land Technology',
        courses: [
            'WDF ( Web Development Foundation )',
            'BCJ-1 ( Bootstrap, CSS, JavaScript - Batch 1 )',
            'JQuery',
            'CSS Animation',
            'MYSQL Database Batch - 1',
            'JS L2 Batch - 3 ( JavaScript Small Projects )',
        ],
    },
] as const;

export const skills = [
    {
        title: 'Frontend',
        lists: [
            { title: 'HTML', icon: TbBrandHtml5 },
            { title: 'CSS', icon: TbBrandCss3 },
            { title: 'JavaScript', icon: TbBrandJavascript },
            { title: 'TypeScript', icon: TbBrandTypescript },
            { title: 'React', icon: TbBrandReact },
            { title: 'React Native', icon: TbBrandReactNative },
            { title: 'Next.js', icon: TbBrandNextjs },
            { title: 'Redux Toolkit', icon: TbBrandRedux },
            { title: 'React Query', icon: SiReactquery },
            { title: 'TailwindCSS', icon: TbBrandTailwind },
            { title: 'Bootstrap', icon: TbBrandBootstrap },
            { title: 'Figma', icon: TbBrandFigma },
            { title: 'Other UI Libraries', icon: PiCirclesThreePlusFill },
        ],
    },
    {
        title: 'Backend',
        lists: [
            { title: 'Node.js', icon: TbBrandNodejs },
            { title: 'Express.js', icon: SiExpress },
        ],
    },
    {
        title: 'Databases & Object Relational Mapping',
        lists: [
            { title: 'MYSQL', icon: TbBrandMysql },
            { title: 'Postgresql', icon: SiPostgresql },
            { title: 'Mongodb', icon: TbBrandMongodb },
            { title: 'Prisma', icon: TbBrandPrisma },
        ],
    },
    {
        title: 'Version Control System',
        lists: [
            { title: 'Git', icon: TbBrandGit },
            { title: 'Github', icon: TbBrandGithub },
        ],
    },
    {
        title: 'IDE & Tools',
        lists: [
            { title: 'VsCode', icon: TbBrandVscode },
            { title: 'WebStrom', icon: SiWebstorm },
            { title: 'Pycharm Community Edition', icon: SiPycharm },
            { title: 'IntelliJ IDEA Community Edition', icon: SiIntellijidea },
            { title: 'Postman', icon: SiPostman },
            { title: 'Android Studio', icon: SiAndroidstudio },
            { title: 'Xcode', icon: SiXcode },
            { title: 'Linux', icon: SiLinux },
            { title: 'Neovim', icon: SiNeovim },
            { title: 'Iterm2', icon: SiIterm2 },
        ],
    },
    {
        title: 'Current Learning',
        lists: [
            { title: 'Nest.js', icon: SiNestjs },
            { title: 'Three.js', icon: TbBrandThreejs },
            { title: 'Python', icon: TbBrandPython },
        ],
    },
] as const;

export const tags = ['html', 'css', 'javascript', 'typescript', 'next.js', 'react', 'react navtive'];

export const projects = [
    {
        title: 'Resume',
        image: '/projects/portfolioimage1.jpg',
        link: 'https://yellhtetaung.github.io/resume/',
        sourceCode: 'https://github.com/yellhtetaung/resume',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'IOS Calculator',
        image: '/projects/ioscalculator-1.png',
        link: 'https://yellhtetaung.github.io/ioscalculator/',
        sourceCode: 'https://github.com/yellhtetaung/ioscalculator',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Anlog Clock',
        image: '/projects/anlogclock-1.png',
        link: 'https://yellhtetaung.github.io/anlogclock/',
        sourceCode: 'https://github.com/yellhtetaung/anlogclock',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Color Generator',
        image: '/projects/colorgenerator-1.png',
        link: 'https://yellhtetaung.github.io/colorgenerator/',
        sourceCode: 'https://github.com/yellhtetaung/colorgenerator',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Emoji rating',
        image: '/projects/emojirating-1.png',
        link: 'https://yellhtetaung.github.io/emojirating/',
        sourceCode: 'https://github.com/yellhtetaung/emojirating',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'My Contact',
        image: '/projects/mycontact-1.png',
        link: 'https://yellhtetaung.github.io/mycontact/',
        sourceCode: 'https://github.com/yellhtetaung/mycontact',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Popup box',
        image: '/projects/popup-1.png',
        link: 'https://yellhtetaung.github.io/popupbox/',
        sourceCode: 'https://github.com/yellhtetaung/popupbox',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Auto Typing',
        image: '/projects/autotyping-1.png',
        link: 'https://yellhtetaung.github.io/autotyping/',
        sourceCode: 'https://github.com/yellhtetaung/autotyping',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'PTTSoftware',
        image: '/projects/pttsoftware-1.png',
        link: 'https://yellhtetaung.github.io/pttsoftware/',
        sourceCode: 'https://github.com/yellhtetaung/pttsoftware',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Password Generator',
        image: '/projects/pwdgrenator-1.png',
        link: 'https://yellhtetaung.github.io/passwordgenerator/',
        sourceCode: 'https://github.com/yellhtetaung/passwordgenerator',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Weather',
        image: '/projects/Weather.png',
        link: 'https://weather-api-three-kappa.vercel.app/',
        sourceCode: 'https://github.com/yellhtetaung/weather-app',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Promptopia',
        image: '/projects/Promptopia.png',
        link: 'https://promptopia-azure-delta.vercel.app/',
        sourceCode: 'https://github.com/yellhtetaung/nextjs-tutorial',
        tag: ['Next.js', 'TypeScript', 'Mongodb'],
    },
    {
        title: 'RepoHub',
        image: '/projects/repohub.png',
        link: 'https://repohub-pi.vercel.app/',
        sourceCode: 'https://github.com/yellhtetaung/repohub',
        tag: ['React', 'JavaScript'],
    },
] as const;

export const uses = [
    { title: 'Macbook Pro M1 ( 2020 )', image: '/uses/macbook.jpg', description: 'Laptop computer' },
    {
        title: 'Royal Kludge RK 61',
        image: '/uses/keyboard.jpg',
        description: 'Wireless Mechanical Keyboard 2.4Ghz/BT5.0/USB-C Black ( Red Switch )',
    },
    {
        title: 'Logitech M720 TRIATHLON',
        image: '/uses/mouse.jpg',
        description: 'Multi-Device Wireless Mouse with Hyper-fast scrolling',
    },
    { title: 'AOC Monitor', image: '/uses/aoc.jpg', description: 'Monitor ( 24 inches )' },
    { title: 'Dudao Laptop Stand', image: '/uses/laptop-stand.jpg', description: 'Laptop Stand' },
] as const;
