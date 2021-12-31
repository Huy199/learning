import coursesIcon from '../assets/icons/bookIcon.svg';
import coursesIconEnabled from '../assets/icons/bookIconEnabled.svg';
import homeIcon from '../assets/icons/homeIcon.svg';
import homeIconEnabled from '../assets/icons/homeIconEnabled.svg';
// import EditIcon from '../assets/icons/editInfoIcon.svg';
import studentsIcon from '../assets/icons/personIcon.svg';
import studentsIconEnabled from '../assets/icons/personIconEnabled.svg';
import promotionIcon from '../assets/icons/promotionIcon.svg';
import promotionIconEnabled from '../assets/icons/promotionIconEnabled.svg';
import settingSidebarIcon from '../assets/icons/settingSidebarIcon.svg';
import settingSidebarIconEnabled from '../assets/icons/settingSidebarIconEnabled.svg';
import tutorsIcon from '../assets/icons/tutorsIcon.svg';
import tutorsIconEnabled from '../assets/icons/tutorsIconEnabled.svg';
import CreateForm from '../components/admin/tripleStepForm/create';
import MakePayment from '../pages/student/payment/makePayment';
import AdminCourse from '../pages/admin/course';
import Dashboard from '../pages/admin/dashboard';
import AdminDetailPromotion from '../pages/admin/detailPromotion';
import AdminDetailStudent from '../pages/admin/detailStudent';
import AdminDetailTutor from '../pages/admin/detailTutor';
import AdminEditTutor from '../pages/admin/editTutor';
import AdminPromotion from '../pages/admin/promotion';
import AdminSettingInfo from '../pages/admin/setting/adminInfoSetting/index';
import AdminSettingNotify from '../pages/admin/setting/adminNotifySetting/index';
import AdminSetting from '../pages/admin/setting/index';
import Security from '../pages/admin/setting/security/index';
import AdminStudent from '../pages/admin/student';
import AdminTutor from '../pages/admin/tutor';
import ForgotPassword from '../pages/forgotPassword';
import Register from '../pages/register';
import Login from '../pages/login';
import DetailFixedCourse from '../pages/student/detailFixedCourse';
import DetailTutor from '../pages/student/detailTutor';
import FixedCourse from '../pages/student/fixedCourse';
import FlexibleLesson from '../pages/student/flexibleLesson';
import Lesson from '../pages/student/lessons';
import Settings from '../pages/student/settings';
import AccountSettings from '../pages/student/settings/Account';
import EmailSettings from '../pages/student/settings/Email';
import NotificationsSettings from '../pages/student/settings/Notifications';
import PasswordSettings from '../pages/student/settings/Password';
import Payments from '../pages/student/payment';
import PaymentHistorySettings from '../pages/student/payment/paymentHistory';
import PaymentMethodSettings from '../pages/student/payment/paymentMethods';
import TutorList from '../pages/student/tutorList';
import TutorListStudent from '../pages/tutor/listStudent';

export const landingRoutes = [];

// Student route
export const studentRoutes = [
  {
    public: true,
    name: 'Lớp linh hoạt',
    path: '/flexible-lesson',
    layout: '/students',
    exact: true,
    component: <FlexibleLesson />,
  },
  {
    public: true,
    name: 'Khoá học cố định',
    path: '/fixed-course',
    layout: '/students',
    exact: true,
    component: <FixedCourse />,
  },
  {
    public: false,
    path: '/tutors',
    layout: '/students',
    exact: true,
    component: <TutorList />,
  },
  {
    public: false,
    path: '/tutors/:1',
    layout: '/students',
    exact: true,
    hidden: true,
    component: <DetailTutor />,
  },
  {
    public: true,
    path: '/fixed-course/:1',
    layout: '/students',
    exact: true,
    hidden: true,
    component: <DetailFixedCourse />,
  },
];
export const studentProfile = [
  {
    name: 'Khoá học',
    path: '/my_lessons',
    layout: '/student_profile',
    exact: true,
    component: <Lesson />,
  },
  {
    name: 'Cài đặt',
    path: '/settings/*',
    layout: '/student_profile',
    exact: true,
    component: <Settings />,
  },
  {
    name: 'Thanh toán',
    path: '/payments/*',
    layout: '/student_profile',
    exact: true,
    component: <Payments />,
  },
];
export const studentSettingRoutes = [
  {
    name: 'Tài khoản',
    path: '/settings/account',
    layout: '/student_profile',
    exact: true,
    component: <AccountSettings />,
  },
  {
    name: 'Email',
    path: '/settings/email',
    layout: '/student_profile',
    exact: true,
    component: <EmailSettings />,
  },
  {
    name: 'Mật khẩu',
    path: '/settings/password',
    layout: '/student_profile',
    exact: true,
    component: <PasswordSettings />,
  },

  {
    name: 'Thông báo',
    path: '/settings/notification',
    layout: '/student_profile',
    exact: true,
    component: <NotificationsSettings />,
  },
];
// Student payment route
export const studentPayment = [
  {
    name: 'Thanh toán',
    path: '/payments/detail-payment',
    layout: '/student_profile',
    exact: true,
    component: <MakePayment />,
  },
  {
    name: 'Phương thức thanh toán ',
    path: '/payments/method-payment',
    layout: '/student_profile',
    exact: true,
    component: <PaymentMethodSettings />,
  },
  {
    name: 'Lịch sử thanh toán',
    path: '/payments/history-payment',
    layout: '/student_profile',
    exact: true,
    component: <PaymentHistorySettings />,
  },
];
// tutor route
export const tutorRoutes = [
  {
    path: '/students',
    layout: '/tutors',
    exact: true,
    component: <TutorListStudent />,
  },
];

// admin routers
export const adminSetting = [
  {
    name: 'Thông tin cá nhân',
    path: '/setting/info',
    layout: '/admin',
    exact: true,
    component: <AdminSettingInfo />,
    icon: settingSidebarIcon,
    iconEnabled: settingSidebarIconEnabled,
  },
  {
    name: 'Thông báo',
    path: '/setting/notify',
    layout: '/admin',
    exact: true,
    component: <AdminSettingNotify />,
  },
  {
    name: 'Bảo mật',
    path: '/setting/security',
    layout: '/admin',
    exact: true,
    component: <Security />,
  },
];
export const adminPanelRouters = [
  {
    name: 'Trang chủ',
    path: '/dashboard',
    layout: '/admin',
    exact: true,
    component: <Dashboard />,
    icon: homeIcon,
    iconEnabled: homeIconEnabled,
  },

  {
    name: 'Khoá học',
    path: '/courses',
    layout: '/admin',
    exact: true,
    component: <AdminCourse />,
    icon: coursesIcon,
    iconEnabled: coursesIconEnabled,
  },
  {
    name: '',
    path: '/tutors/edit-tutor',
    layout: '/admin',
    exact: true,
    hidden: true,
    component: <AdminEditTutor />,
  },
  {
    name: 'Giáo viên',
    path: '/tutors',
    layout: '/admin',
    exact: true,
    component: <AdminTutor />,
    icon: tutorsIcon,
    iconEnabled: tutorsIconEnabled,
  },
  {
    name: 'Học sinh',
    path: '/students',
    layout: '/admin',
    exact: true,
    component: <AdminStudent />,
    icon: studentsIcon,
    iconEnabled: studentsIconEnabled,
  },
  {
    name: 'Khuyến mại',
    path: '/promotions',
    layout: '/admin',
    exact: true,
    component: <AdminPromotion />,
    icon: promotionIcon,
    iconEnabled: promotionIconEnabled,
  },
  {
    name: 'Cài đặt',
    path: '/setting/*',
    layout: '/admin',
    exact: true,
    component: <AdminSetting />,
    icon: settingSidebarIcon,
    iconEnabled: settingSidebarIconEnabled,
  },
  {
    path: `/tutors/add-tutor`,
    layout: '/admin',
    hidden: true,
    exact: true,
    component: <CreateForm />,
  },
  {
    path: `/tutors/:tutorId`,
    layout: '/admin',
    hidden: true,
    exact: true,
    component: <AdminDetailTutor />,
  },

  {
    path: '/students/:studentId',
    layout: '/admin',
    hidden: true,
    exact: true,
    component: <AdminDetailStudent />,
  },
  {
    path: `/promotions/:code`,
    layout: '/admin',
    hidden: true,
    exact: true,
    component: <AdminDetailPromotion />,
  },
];

// Auth route
export const authRoutes = [
  {
    path: '/login',
    layout: '/auth',
    exact: true,
    component: <Login />,
  },
  
  {
    path: '/forgot-password',
    layout: '/auth',
    exact: true,
    component: <ForgotPassword />,

  },
  {
    path: '/register',
    layout: '/auth',
    exact: true,
    component: <Register />,
  },
];
