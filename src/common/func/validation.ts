import { RuleObject } from 'rc-field-form/lib/interface';

// regex.ts
export const usernameRegex: RegExp = /^[a-zA-Z0-9]+$/;
export const emailRegex: RegExp =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Hàm trả về một đối tượng quy tắc required
export const requiredRule = (message: string): RuleObject => ({
  required: true,
  message,
});

// Hàm trả về một đối tượng quy tắc pattern
export const patternRule = (pattern: RegExp, message: string): RuleObject => ({
  pattern,
  message,
});

// Các quy tắc xác thực cho username
export const usernameRules: RuleObject[] = [
  requiredRule('Please input your username!'),
  patternRule(usernameRegex, 'Username must be alphanumeric!'),
];

// Các quy tắc xác thực cho email
export const emailRules: RuleObject[] = [
  requiredRule('Please input your email!'),
  patternRule(emailRegex, 'Please enter a valid email address!'),
];

//đặt messages đồng bộ cả form
// <Form validateMessages={validateMessages}>
// <Form.Item label='name' className={styles.input} name='name' rules={[{required: true}]}>
// <Input placeholder='name' />
// </Form.Item>
// </Form>
export const validateMessages = {
  required: '${label} không được để trống',

  number: {
    range: '${label} trong khoảng ${min} từ ${max}',
  },
};
