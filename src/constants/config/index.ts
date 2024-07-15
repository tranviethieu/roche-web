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
  TrackSampler = '/main/sampler/track-sampler',
}

export type MenuItem = Required<MenuProps>['items'][number];
export const menuItemMain: MenuItem[] = [
  {
    key: 'sampler',
    label: 'Lấy mẫu',
    children: [
      {
        key: 'track-sampler',
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
            key: `suc-khoe`,
            label: 'Theo dõi lấy mẫu khám sức khoẻ',
          },
          {
            key: `ca-nhan`,
            label: 'Theo dõi lấy mẫu cá nhân',
          },
          {
            key: `truyen-mau`,
            label: 'Theo dõi lấy mẫu truyền máu',
          },
          {
            key: `mau-tron`,
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
  { key: 'results', label: 'Results' },
  {
    key: 'antibiogram',
    label: 'Antibiogram',
    children: [
      { key: 'antibiotic-families', label: 'Antibiotic families' },
      { key: 'Antibiotics', label: 'Antibiotics' },
      { key: 'Antibiotic-methods', label: 'Antibiotic methods' },
      { key: 'Antibiogram', label: 'Antibiogram' },
    ],
  },
  {
    key: 'tests',
    label: 'Tests',
    children: [
      { key: '9', label: 'Theo dõi mẫu giao' },
      { key: '10', label: 'Giao mẫu đơn' },
      { key: '11', label: 'Giao mẫu theo batch' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'ICA',
    label: 'ICA',
    children: [
      { key: 'instrument-definition', label: 'Instrument definition' },
    ],
  },
];
