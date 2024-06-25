import { MenuProps } from 'antd';

export const MAXIMUM_FILE = 10; //MB
export const KEY_STORE = 'ROCHE-SWITCHBOARD';
export const allowFiles = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/jpg',
  'image/png',
];

export enum PATH {
  Login = '/login',
  ForgotPassword = 'forgot-password',
  Main = '/',
  Administration = '/administration',
  Monitoring = '/monitoring',
  TrackSampler = '/main/track-sampler',
}

export type MenuItem = Required<MenuProps>['items'][number];
export const menuItemMain: MenuItem[] = [
  {
    key: 'main',
    label: 'Lấy mẫu',
    children: [
      {
        key: 'main1',
        label: 'Theo dõi lấy mẫu',
        children: [
          {
            key: `${PATH.TrackSampler}/ngoai-tru`,
            label: 'Theo dõi lấy mẫu ngoại trú',
          },
          {
            key: `${PATH.TrackSampler}/noi-tru`,
            label: 'Theo dõi lấy mẫu nội trú',
          },
          {
            key: `${PATH.TrackSampler}/suc-khoe`,
            label: 'Theo dõi lấy mẫu khám sức khoẻ',
          },
          {
            key: `${PATH.TrackSampler}/ca-nhan`,
            label: 'Theo dõi lấy mẫu cá nhân',
          },
          {
            key: `${PATH.TrackSampler}/truyen-mau`,
            label: 'Theo dõi lấy mẫu truyền máu',
          },
          {
            key: `${PATH.TrackSampler}/mau-tron`,
            label: 'Theo dõi lấy mẫu: mẫu trộn',
          },
        ],
      },
      { key: 'main2', label: 'Lấy số thứ tự' },
      { key: 'main3', label: 'Lấy mẫu ngoại trú' },
      { key: 'main4', label: 'Lấy mẫu nội trú' },
    ],
  },
  {
    key: 'sub4',
    label: 'Giao mẫu',
    children: [
      { key: '9', label: 'Theo dõi mẫu giao' },
      { key: '10', label: 'Giao mẫu đơn' },
      { key: '11', label: 'Giao mẫu theo batch' },
    ],
  },
  {
    key: 'grp',
    label: 'Nhận mẫu',
    children: [
      { key: '13', label: 'Theo dõi nhận mẫu' },
      { key: '14', label: 'Nhận mẫu ngoại trú' },
    ],
  },
];
export const menuItemMonitoring: MenuItem[] = [
  {
    key: 'sub2',
    label: 'Lấy mẫu',
    children: [
      {
        key: 'sub3',
        label: 'Theo dõi lấy mẫu ngoại trú',
        children: [
          {
            key: `${PATH.Administration}${PATH.TrackSampler}/ngoai-tru`,
            label: 'Theo dõi lấy mẫu ngoại trú',
          },
          {
            key: `${PATH.Administration}${PATH.TrackSampler}/noi-tru`,
            label: 'Theo dõi lấy mẫu nội trú',
          },
        ],
      },
      { key: '9aa', label: 'Lấy số thứ tự' },
      { key: '9aa1', label: 'Lấy mẫu ngoại trú' },
      { key: '9aa2', label: 'Lấy mẫu nội trú' },
    ],
  },
  {
    key: 'sub4',
    label: 'Giao mẫu',
    children: [
      { key: '9', label: 'Theo dõi mẫu giao' },
      { key: '10', label: 'Giao mẫu đơn' },
      { key: '11', label: 'Giao mẫu theo batch' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Nhận mẫu',
    children: [
      { key: '13', label: 'Theo dõi nhận mẫu' },
      { key: '14', label: 'Nhận mẫu ngoại trú' },
    ],
  },
];
export const menuItemAdmin: MenuItem[] = [
  {
    key: 'sub2',
    label: 'Results',
    children: [
      {
        key: 'sub3',
        label: 'Theo dõi lấy mẫu ngoại trú',
        children: [
          {
            key: `${PATH.Administration}${PATH.TrackSampler}/ngoai-tru`,
            label: 'Theo dõi lấy mẫu ngoại trú',
          },
          {
            key: `${PATH.Administration}${PATH.TrackSampler}/noi-tru`,
            label: 'Theo dõi lấy mẫu nội trú',
          },
        ],
      },
      { key: '9aa', label: 'Lấy số thứ tự' },
      { key: '9aa1', label: 'Lấy mẫu ngoại trú' },
      { key: '9aa2', label: 'Lấy mẫu nội trú' },
    ],
  },
  {
    key: 'sub4',
    label: 'Antibiogram',
    children: [
      { key: '9', label: 'Theo dõi mẫu giao' },
      { key: '10', label: 'Giao mẫu đơn' },
      { key: '11', label: 'Giao mẫu theo batch' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Tests',
    children: [
      { key: '13', label: 'Theo dõi nhận mẫu' },
      { key: '14', label: 'Nhận mẫu ngoại trú' },
    ],
  },
];
