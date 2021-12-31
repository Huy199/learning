import morningIcon from '../assets/icons/morningIcon.svg';
import morningIconWhite from '../assets/icons/morningIconWhite.svg';
import morningLateIcon from '../assets/icons/morningLateIcon.svg';
import morningLateIconWhite from '../assets/icons/morningLateIconWhite.svg';
import afternoonIcon from '../assets/icons/afternoonIcon.svg';
import afternoonIconWhite from '../assets/icons/afternoonIconWhite.svg';
import afternoonLateIcon from '../assets/icons/afternoonLateIcon.svg';
import afternoonLateIconWhite from '../assets/icons/afternoonLateIconWhite.svg';
import eveningIcon from '../assets/icons/eveningIcon.svg';
import eveningIconWhite from '../assets/icons/eveningIconWhite.svg';

// Routes
export const routes = {
  // student
  STUDENT: '/students/tutors',
  DETAIL_FIXED_COURSE: '/students/fixed-course',

  // auth
  AUTH: '/auth/login',

  // admin panel
  ADMIN_COURSE: '/admin/courses',
  ADMIN_TUTOR: '/admin/tutors',
  ADMIN_STUDENT: '/admin/students',

  // tutor
  TUTOR: '/tutors/students',
};

export const routeAdminDashboard = {
  courses: 'courses',
  tutors: 'tutors',
  students: 'students',
};

// setup for Apis
export const baseURL = 'http://35.222.215.64/api';

export const urls = {
  TUTORS: 'tutors',
  FIXED_COURSE: 'courses',
  LESSON: 'lessons',
  FLEXIBLE: 'flexible',
};

// Fake data
export const fakeDataTeacher = [
  {
    id: 1,
    name: 'Minh Thu',
    course: 'Vật Lý',
    image:
      'https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/7/22/photo1626921831792-1626921831861797554451.jpg',
  },
  {
    id: 2,
    name: 'Thanh Nga',
    course: 'Vật Lý',
    image:
      'https://danviet.mediacdn.vn/zoom/700_438/296231569849192448/2021/8/8/screenshot-2021-08-08-at-15-22-03-bai-cho-bien-tap-1628410978319822607846-0-41-306-531-crop-1628410983629995657103.png',
  },
  {
    id: 3,
    name: 'Khắc Ngọc',
    course: 'Hoá Học',
    image: 'https://icdn.dantri.com.vn/thumb_w/640/2021/04/23/khac-ngoc-crop-1619165711563.jpeg',
  },
  {
    id: 4,
    name: 'Thanh Hoa',
    course: 'Tiếng Anh',
    image:
      'https://vnn-imgs-f.vgcloud.vn/2019/11/18/21/co-giao-co-kha-nang-lay-nuoc-mat-hoc-tro-trong-nhung-tiet-giang-van-1.JPG',
  },
  {
    id: 5,
    name: 'Lê Khanh',
    course: 'Văn Học',
    image: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/8/base64-1625751785664826261304.png',
  },
  {
    id: 6,
    name: 'Minh Anh',
    course: 'Văn Học',
    image:
      'https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2021/7/22/photo1626921831792-1626921831861797554451.jpg',
  },
];

export const fakeDataStudent = [
  {
    id: 1,
    name: 'Khanh Nguyen',
    course: 'physic',
    image:
      'https://vnn-imgs-f.vgcloud.vn/2019/05/18/17/hon-1-000-hoc-sinh-gioi-tieu-bieu-thu-do-duoc-tuyen-duong-khen-thuong.JPG',
  },
  {
    id: 2,
    name: 'Hoang Huy',
    course: 'physic',
    image: 'https://nld.mediacdn.vn/291774122806476800/2021/11/13/hai-an--1636815835400325193153.jpeg',
  },
  {
    id: 3,
    name: 'Hùng ',
    course: 'chemistry',
    image:
      'https://cdn.24h.com.vn/upload/2-2020/images/2020-06-01/Vo-tinh-lot-vao-ong-kinh-nu-sinh-xinh-dep-gay-chu-y-nhat-nu-sinh-olympia-1-1590998230-929-width660height364.jpg',
  },
  {
    id: 4,
    name: 'Thanh Hoa',
    course: 'english',
    image:
      'https://afamilycdn.com/150157425591193600/2021/10/4/11832094327217075248132585019595881593663500n-1633359570452868194687.jpg',
  },
  {
    id: 5,
    name: 'Lê Khanh',
    course: 'english',
    image:
      'https://vtv1.mediacdn.vn/thumb_w/640/2021/3/29/16593235639286000004966095386626306342817343o-1616989978133170778375.jpg',
  },
  {
    id: 6,
    name: 'Minh Anh',
    course: 'endlish',
    image:
      'https://znews-photo.zadn.vn/w660/Uploaded/mdf_drkydd/2020_04_15/89009195_2888564437833509_6182784325159747584_o_1.jpg',
  },
];

export const fakeDataCourse = [
  {
    id: 1,
    name: 'Minh Thu',
    course: 'Vật Lý',
    image: 'https://vatlypt.com/styles/nerva/xenforo/logo.og.png',
  },
  {
    id: 2,
    name: 'Thanh Nga',
    course: 'Vật Lý',
    image: 'https://yt3.ggpht.com/ytc/AKedOLQv0FZTPz_--fErKKFoybNDHdrvlTOD2MoqQt3ZkRU=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    name: 'Khắc Ngọc',
    course: 'Hoá Học',
    image: 'https://wiibook.net/wp-content/uploads/2020/09/list-sach-hay-ve-hoa-hoc-cover-757x470.png',
  },
  {
    id: 4,
    name: 'Thanh Hoa',
    course: 'Tiếng Anh',
    image: 'https://cdn.tgdd.vn/Files/2020/06/18/1263923/top5ungdunghotrohoctienganh-_1600x900-800-resize.jpg',
  },
  {
    id: 5,
    name: 'Lê Khanh',
    course: 'Văn Học',
    image: 'https://caybutnhi.vn/admincp/uploads/image/6.jpg',
  },
  {
    id: 6,
    name: 'Minh Anh',
    course: 'Văn Học',
    image: 'https://caybutnhi.vn/admincp/uploads/image/6.jpg',
  },
];

export const fakeNotifications = [
  {
    id: 1,
    title: 'Tin nhắn chưa đọc từ Đoàn Minh Đức',
    avatar:
      'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/38452373_2163522410547988_6021963002792640512_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=G1Al4OKqMhYAX9A0qgq&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8nQq-Nx2Xdc8sM5qghIpW-FKLM5AbuQc87YQEqNVo42A&oe=61E1B9FF',
    time: '10:40 A.M',
    isSeen: false,
  },
  {
    id: 2,
    title: 'Tin nhắn chưa đọc từ Hoàng Việt',
    time: '5:22 A.M',
    avatar:
      'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/38452373_2163522410547988_6021963002792640512_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=G1Al4OKqMhYAX9A0qgq&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8nQq-Nx2Xdc8sM5qghIpW-FKLM5AbuQc87YQEqNVo42A&oe=61E1B9FF',
    isSeen: false,
  },
  {
    id: 3,
    title: 'Tin nhắn chưa đọc từ Thiên Sơn',
    avatar:
      'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/58729814_2261143867485857_3834415676517253120_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=QWYUhG6KraUAX9riPM-&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9lCJI6SbgSfg9jpR1KI3jdSPFbkCEancflk1gQls50qQ&oe=61E28F60',
    time: '12:40 P.M',
    isSeen: false,
  },
  {
    id: 4,
    title: 'Tin nhắn chưa đọc từ Quang Huy',
    avatar:
      'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/58729814_2261143867485857_3834415676517253120_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=QWYUhG6KraUAX9riPM-&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9lCJI6SbgSfg9jpR1KI3jdSPFbkCEancflk1gQls50qQ&oe=61E28F60',
    time: '7:38 A.M',
    isSeen: false,
  },
];

export const filterTimeBlock = [
  { id: 1, icon: morningIcon, iconActive: morningIconWhite, hours: '6-9', text: 'Buổi sáng', isActive: false },
  {
    id: 2,
    icon: morningLateIcon,
    iconActive: morningLateIconWhite,
    hours: '9-12',
    text: 'Cuối buổi sáng',
    isActive: false,
  },
  { id: 3, icon: afternoonIcon, iconActive: afternoonIconWhite, hours: '12-15', text: 'Buổi chiều', isActive: false },
  {
    id: 4,
    icon: afternoonLateIcon,
    iconActive: afternoonLateIconWhite,
    hours: '15-18',
    text: 'Cuối buổi chiều',
    isActive: false,
  },
  { id: 5, icon: eveningIcon, iconActive: eveningIconWhite, hours: '18-22', text: 'Buổi tối', isActive: false },
];

export const filterWeekday = [
  { id: 1, text: 'Hai', isActive: false },
  { id: 2, text: 'Ba', isActive: false },
  { id: 3, text: 'Tư', isActive: false },
  { id: 4, text: 'Năm', isActive: false },
  { id: 5, text: 'Sáu', isActive: false },
  { id: 6, text: 'Bảy', isActive: false },
  { id: 7, text: 'C.N', isActive: false },
];
