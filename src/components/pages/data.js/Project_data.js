import { IoAlertCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// 
import { GrProjects } from "react-icons/gr";
import { FaCodepen } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { RiSpeedUpFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { FaDumpsterFire } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { FaTencentWeibo } from "react-icons/fa";
import { MdDomainAdd } from "react-icons/md";
import { RiHome5Line } from "react-icons/ri";
import { GrStorage } from "react-icons/gr";
import { FaFlagCheckered } from "react-icons/fa";
import { PiDotsThreeFill } from "react-icons/pi";
import { FaHandDots } from "react-icons/fa6";
import { VscSendToRemoteAgent } from "react-icons/vsc";
import { FaWarehouse } from "react-icons/fa6";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { TiWeatherSunny } from "react-icons/ti";
import { LuCloudMoon } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { BsVectorPen } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineDownloading } from "react-icons/md";
export const data = [
  { id: 1, icon_1: IoCheckmarkCircleOutline, condition: 'Edge Requests', stroage: '1.5K / 1M', icon_2: IoAlertCircleOutline },
  { id: 2, icon_1: IoCheckmarkCircleOutline, condition: 'Fast data transfer', stroage: '1.5K / 1M', icon_2: IoAlertCircleOutline },
  { id: 3, icon_1: IoCheckmarkCircleOutline, condition: 'Edge request CPU duration', stroage: '1.5K / 1M', icon_2: IoAlertCircleOutline },
  { id: 4, icon_1: IoCheckmarkCircleOutline, condition: 'Function invocations', stroage: '1.5K / 1M', icon_2: IoAlertCircleOutline },
  { id: 5, icon_1: IoCheckmarkCircleOutline, condition: 'Function duration', stroage: '1.5K / 1M', icon_2: IoAlertCircleOutline },
  { id: 6, icon_1: IoCheckmarkCircleOutline, condition: 'ISR reads', stroage: '4 / 1M', icon_2: IoAlertCircleOutline },
  { id: 7, icon_1: IoCheckmarkCircleOutline, condition: 'Fast origin transfer', stroage: '28.91kB / 10GB', icon_2: IoAlertCircleOutline },
  { id: 8, icon_1: IoCheckmarkCircleOutline, condition: 'Microfrontend routing', stroage: '0 / 50K', icon_2: IoAlertCircleOutline },
  { id: 9, icon_1: IoCheckmarkCircleOutline, condition: 'ISR writes', stroage: '0 / 200K', icon_2: IoAlertCircleOutline },
  { id: 10, icon_1: IoCheckmarkCircleOutline, condition: 'Fluid provisioned memory', stroage: '0 / 360 GB-Hrs', icon_2: IoAlertCircleOutline },
];
//project
export const project_data=[
  {id:1,title:'jobify-project',links:'Jobify-project-one.vercel.app',github_title:'This-is-user',updates_text:'',dates:'12/3/26on'},
  {id:2,title:'dream-job',links:'dream-job.vercel.app',github_title:'This-is-user',updates_text:'dream-job-server-update',dates:'14/4/25on'},
  {id:3,title:'payroll',links:'payroll.vercel.app',github_title:'This-is-user',updates_text:'payment_update',dates:'15/3/24on'},
  {id:4,title:'colne-vercel',links:'colne-vercel.vercel.app',github_title:'This-is-user',updates_text:'update-frontend',dates:'16/4/20on'},
]

export const  sideBar=[
  {id:1,links:'projects',icons:GrProjects ,path:'/projects'},
  {id:2,links:'deployments',icons:FaCodepen,path:'/deployments'},
  {id:3,links:'logs',icons:TbLogs ,path:'/logs'},
  {id:4,links:'analytics',icons:GoGraph,path:'/analytics'},
  {id:5,links:'speed insights',icons:RiSpeedUpFill,path:'/speed-insights'},
  {id:6,links:'observability',icons:IoMdEye,path:'/observability'},
  {id:7,links:'firewall',icons:FaDumpsterFire ,path:'/firewall'},
  {id:8,links:'CDN',icons:IoEarthOutline,path:'/cdn'},
  {id:9,links:'environment variables',icons:FaTencentWeibo,path:'/environment-variables' },
  {id:10,links:'domains',icons:MdDomainAdd ,path:'/domains'},
  {id:11,links:'integrations',icons:RiHome5Line ,path:'/integrations'},
  {id:12,links:'storage',icons:GrStorage,path:'/storage'},
  {id:13,links:'flags',icons:FaFlagCheckered,path:'/flags'},
  {id:14,links:'agents',icons:PiDotsThreeFill,path:'/agents'},
  {id:15,links:'ai gateway',icons:FaHandDots,path:'/ai-gateway'},
  {id:16,links:'sandboxes',icons:VscSendToRemoteAgent,path:'/sandboxes' },
  {id:17,links:'workflows',icons:FaWarehouse,path:'/workflows'},
  {id:18,links:'usage',icons:IoCodeWorkingOutline,path:'/usage'},
  {id:19,links:'support',icons:MdContactSupport,path:'/support'},
  {id:20,links:'settings',icons:IoIosSettings,path:'/settings'},
  
]
export const profile_data=[
  {id:1,title:'feedback',icon:CiFaceSmile ,path:'/'},
  {id:2,title:'theme',icon:TiWeatherSunny,path:'/'},
  {id:3,title:'home page',icon:FaHome,path:'/'},
  {id:4,title:'changing',icon:BsVectorPen ,path:'/'},
  {id:5,title:'help',icon:IoIosHelpBuoy,path:'/'},
  {id:6,title:'docs',icon:SiGoogledocs,path:'/'},
  {id:7,title:'logout',icon:RiLogoutCircleRLine,path:'/' },
]

export const deployment_data = [
  { id: 1, title: 'ready', checkbox_color: 'accent-red-500 ' },
  { id: 2, title: 'error', checkbox_color: 'accent-black' },
  { id: 3, title: 'building', checkbox_color: 'accent-yellow-400' },
  { id: 4, title: 'queued', checkbox_color: 'accent-pink-500' },
  { id: 5, title: 'initializing', checkbox_color: 'accent-gray-400' },
  { id: 6, title: 'canceled', checkbox_color: 'accent-blue-800' },
];
export const deployment_project_data=[
  {id:,},
  {id:,},
  {id:,},
  {id:,},
  {id:,},
  {id:,},
  {id:,},
  {id:,},
]