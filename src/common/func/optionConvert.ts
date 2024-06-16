export function removeVietnameseTones(str: string): string {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
}

export function displayNumber(num: number) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num.toString();
  }
}

export function getTextTime(value: { h: number; m: number }) {
  return `${value?.h <= 0 ? '' : `${value?.h} giờ`} ${value?.m <= 0 ? '' : `${value?.m} phút`}`;
}

export function checkTime(i: any) {
  if (Math.abs(i) < 10) {
    i = '0' + i;
  }
  return i;
}

export const checkDate = (date: Date | string | null) => {
  return date == '0001-01-01T00:00:00' ||
    date == '0001-01-01T00:00:00Z' ||
    !date
    ? null
    : new Date(date);
};

export const getValueArr = (key: string, arr: any[], valueDefault: any) => {
  try {
    return arr.length > 0 ? arr.map((v) => v[key]) : valueDefault;
  } catch (err) {
    return valueDefault;
  }
};

export const jsonParse = (data: any) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
};

export const cleanObject = (
  paramsObject: { [key: string]: any },
  ignoreKeys: string[] = []
) => {
  const cloneParamsObject = { ...paramsObject };
  for (const keyParam in paramsObject) {
    if (
      !ignoreKeys.includes(keyParam) &&
      (cloneParamsObject[keyParam] === null ||
        cloneParamsObject[keyParam] === '' ||
        cloneParamsObject[keyParam] === undefined)
    ) {
      delete cloneParamsObject[keyParam];
    }
  }
  return cloneParamsObject;
};

export const stringifyURLSearchParams = (data: any) => {
  data = cleanObject(data);
  if (!Object.keys(data).length) return '';
  return (
    '?' +
    Object.entries(data)
      .reduce((out: string[], [key, value]) => {
        if (Array.isArray(value)) {
          out = [...out, ...value.map((valueItem) => `${key}=${valueItem}`)];
        } else {
          out.push(`${key}=${value}`);
        }
        return out;
      }, [])
      .join('&')
  );
};

export const convertNumText = (num: number) => {
  num = isNaN(Number(num)) ? 0 : num;

  if (Math.abs(num) >= 1000 && Math.abs(num) < 1000000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  if (Math.abs(num) >= 1000000 && Math.abs(num) < 1000000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (Math.abs(num) >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  }

  return num;
};

export function convertToUTCPlus7(date: Date) {
  const localTime = date.getTime();
  // Thêm giá trị múi giờ +7 vào thông tin giờ để chuyển đổi sang múi giờ UTC+07:00.
  const utcPlus7Time = localTime + 7 * 60 * 60 * 1000; // 7 giờ * 60 phút * 60 giây * 1000 mili giây
  // Tạo một đối tượng Date mới từ thông tin giờ đã được chuyển đổi.
  const convertedDate = new Date(utcPlus7Time);
  return convertedDate;
}

export function convertUTCtoCustomFormat(utcTime: string) {
  const utcDate = new Date(utcTime);
  // Chuyển đổi thành ngày tiếp theo và đặt giờ, phút, giây về 0
  utcDate.setDate(utcDate.getDate() + 1);
  utcDate.setUTCHours(0, 0, 0, 0);
  // Chuyển đổi về định dạng mong muốn
  const formattedDate = utcDate.toISOString().slice(0, 19);
  return formattedDate;
}

export function blobToFile(blob: any, fileName: string) {
  const file = new File([blob], fileName, { type: blob.type });
  return file;
}

export function getNameMethod(
  arr: { id: number | string; name: string }[],
  id: number | string
) {
  const item = arr?.find((v) => v.id == id);

  return item?.name || 'Tất cả';
}

export function convertAddress(
  address?: string,
  province?: {
    code: string;
    name: string;
  },
  district?: {
    code: string;
    name: string;
  },
  ward?: {
    code: string;
    name: string;
  }
) {
  if (!address && !province?.code && !district?.code && !ward?.code) {
    return '';
  } else {
    if (address) {
      return `${address}`;
    } else {
      return `${ward ? ward?.name : '---'}, ${district ? district?.name : '---'}, ${province ? province?.name : '---'}`;
    }
  }
}
