import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaJava } from 'react-icons/fa';
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
    TbBrandGit,
    TbBrandGithub,
    TbBrandVscode,
    TbBrandRedux,
    TbBrandVisualStudio,
    TbBrandCSharp,
} from 'react-icons/tb';
import {
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
    SiSourcetree,
    SiKotlin,
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
            'BCJ ( Bootstrap, CSS, JavaScript )',
            'JQuery',
            'CSS Animation',
            'Database ( MySQL )',
            'JS L2 ( JavaScript Small Projects )',
        ],
    },
    { school: 'KMD Institute', courses: ['Level 4 Diploma In Computing (L4DC) • NCC Education (UK)', 'Level 5 Diploma In Computing (L4DC) • NCC Education (UK)'] },
] as const;

export const experiences = [
    {
        company: 'Tech Paradise',
        position: 'IT Assistant',
        start_date: '2018',
        end_date: '2020',
        description:
            'I worked as an IT assistant in Tech Paradise for two years. I assisted in the installation, operation, and maintenance of computer networks and communication systems. I provided technical support for hardware and software issues, ensuring minimal downtime and maximum efficiency. I conducted regular system updates and backups to ensure data integrity and security. I collaborated with team members to troubleshoot and resolve network connectivity issues. I managed the inventory of IT equipment and coordinated with vendors for procurement and repairs.',
        extra_description: null,
        languages: null,
    },
    {
        company: 'Yoon Han Thar',
        position: 'Senior Full Stack Developer',
        start_date: '2022',
        end_date: 'Feb 2024',
        description:
            'I developed web applications using Next.js and mobile applications using React Native. I managed and led various projects as a project manager, ensuring timely delivery and adherence to client specifications. I negotiated with clients to define project requirements, scope, and timelines, fostering strong client relationships. I built and maintained reusable components for future use. I collaborated with cross-functional teams, including designers and backend developers, to deliver high-quality applications. I conducted code reviews and implemented best practices to maintain high standards of code quality and performance. I stayed up-to-date with the latest industry trends and technologies to continuously improve development processes.',
        extra_description: null,
        languages: [
            'HTML & CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'React Native',
            'MYSQL',
            'Next.js',
            'TailwindCSS',
            'Bootstrap',
            'React Native Material UI',
        ],
    },
    {
        company: 'uab Bank',
        position: 'React Native Developer',
        start_date: 'Apr 2024',
        end_date: null,
        description:
            'I’m currently working as a React Native Developer at uab Bank. I developed new features for uabpay and other related applications, including social features and restaurant reservations. I upgraded the React Native version of uabpay, enhancing app performance and compatibility. I focused primarily on implementing and optimizing social features within the app.',
        extra_description: [
            {
                header: 'Key contributions to social features include:',
                keys: [
                    'Implemented infinite scrolling for a seamless user experience.',
                    'Developed dynamic data rendering for each post, ensuring real-time updates.',
                    'Implemented data encryption and decryption to ensure user data security.',
                    'Enhanced video buffering capabilities for smooth video playback.',
                ],
            },
        ],
        languages: ['JavaScript', 'TypeScript', 'React Native'],
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
            { title: 'Visual Studio Code', icon: TbBrandVscode },
            { title: 'Visual Studio', icon: TbBrandVisualStudio },
            { title: 'WebStrom', icon: SiWebstorm },
            { title: 'Pycharm Community Edition', icon: SiPycharm },
            { title: 'IntelliJ IDEA Community Edition', icon: SiIntellijidea },
            { title: 'Postman', icon: SiPostman },
            { title: 'Android Studio', icon: SiAndroidstudio },
            { title: 'Xcode', icon: SiXcode },
            { title: 'Linux', icon: SiLinux },
            { title: 'Neovim', icon: SiNeovim },
            { title: 'Iterm2', icon: SiIterm2 },
            { title: 'SourceTree', icon: SiSourcetree },
        ],
    },
    {
        title: 'Current Learning',
        lists: [
            { title: 'Java', icon: FaJava },
            { title: 'C Sharp', icon: TbBrandCSharp },
            { title: 'Kotlin', icon: SiKotlin },
        ],
    },
] as const;

export const tags = [
    { title: 'HTML', link: 'html' },
    { title: 'CSS', link: 'css' },
    { title: 'JavaScript', link: 'javascript' },
    { title: 'TypeScript', link: 'typescript' },
    { title: 'Next.js', link: 'next.js' },
    { title: 'React', link: 'react' },
    { title: 'React Native', link: 'reactnative' },
    { title: 'C#', link: 'csharp' },
    { title: 'Java', link: 'java' },
    { title: 'Kotlin', link: 'kotlin' },
];

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
        title: 'Portfolio',
        image: '/projects/portfolio.png',
        link: 'https://yehtetaung-dev.vercel.app/',
        sourceCode: 'https://github.com/yellhtetaung/my-portfolio',
        tag: ['Next.js', 'TypeScript', 'Shadcn UI', 'TailwindCSS'],
    },
    {
        title: 'RepoHub',
        image: '/projects/repohub.png',
        link: 'https://repohub-pi.vercel.app/',
        sourceCode: 'https://github.com/yellhtetaung/repohub',
        tag: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
        title: 'Burmese Agriculture',
        image: '/projects/burmese-agriculture.jpg',
        link: null,
        sourceCode: 'https://github.com/yellhtetaung/BurmeseAgriculture.git',
        tag: ['React Native', 'TypeScript'],
    },
    {
        title: 'TMDB Movie App',
        image: '/projects/tmdb-movie-app.jpg',
        link: null,
        sourceCode: 'https://github.com/yellhtetaung/TMDbApp.git',
        tag: ['React Native', 'TypeScript'],
    },
    {
        title: 'Bagan Map',
        image: '/projects/bagan-map.jpg',
        link: null,
        sourceCode: 'https://github.com/yellhtetaung/BaganMap.git',
        tag: ['React Native', 'TypeScript'],
    },
    {
        title: 'Standing Desk',
        image: '/projects/standing-desk.png',
        link: 'https://standing-desk-pi.vercel.app/',
        sourceCode: 'https://github.com/yellhtetaung/standing-desk',
        tag: ['HTML', 'CSS'],
    },
    {
        title: 'Fitness Tracker',
        image: '/projects/TraninerDashboard.PNG',
        link: null,
        sourceCode: 'https://github.com/yellhtetaung/FitnessTracker',
        tag: ['Csharp', 'Window Form'],
    },
] as const;

export const uses = [
    {
        title: 'Macbook Pro M1 ( 2020 )',
        image: '/uses/macbook.jpg',
        description: 'Laptop computer ( RAM 8 GB, Storage 256 GB )',
    },
    {
        title: 'Lenovo Thinkpad T450',
        image: '/uses/lenovo-thinkpad.jpg',
        description: 'Laptop computer ( RAM 12 GB, Storage 128 GB )',
    },
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
