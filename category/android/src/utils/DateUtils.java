package com.onecampus.yi.utils;

import android.annotation.SuppressLint;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SuppressLint("SimpleDateFormat")
public class DateUtils {
	private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//"yyyy-MM-dd HH:mm:ss z"
	private static SimpleDateFormat format2 = new SimpleDateFormat("yyyy-MM-dd");
	private static long ONE_MINUTE = 1000 * 60;
	private static long ONE_HOUR = ONE_MINUTE * 60;
	private static long ONE_DAY = ONE_HOUR * 24;
	private static long ONE_MONTH = ONE_DAY * 30;
	private static long ONE_YEAR = ONE_MONTH * 12;
	
	public static String difTimeJustNow = "刚刚";
	public static String difTimeMinutes = "分钟前";
	public static String difTimeHours = "小时前";
	public static String difTimeDays = "天前";
	public static String difTimeMonths = "月前";
	public static String difTimeYears = "年前";
	
	public static String getNowDate() {
		Date dateNow = new Date();
		return format.format(dateNow);
	}
	
	public static String getDifDate(String dateStr) {
	    try {
	    	String rlt = null;
	    	Date dateNow = new Date();
			Date date = format.parse(dateStr);
			long dif = dateNow.getTime() - date.getTime();
			
			if(dif < (ONE_MINUTE * 2)) {
				rlt = difTimeJustNow;
			} else if(dif < ONE_HOUR) {
				rlt = String.valueOf(dif/ONE_MINUTE) + difTimeMinutes;
			} else if(dif < ONE_DAY) {
				rlt = String.valueOf(dif/ONE_HOUR) + difTimeHours;
			} else if(dif < ONE_MONTH)  {
				rlt = String.valueOf(dif/ONE_DAY) + difTimeDays;
			} else if(dif < ONE_YEAR)  {
				rlt = String.valueOf(dif/ONE_MONTH) + difTimeMonths;
			} else {
				rlt = String.valueOf(dif/ONE_YEAR) + difTimeYears;
			}
			
			return rlt;
		} catch (ParseException e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	public static Date strToDate(String dateStr) {
	    try {
			return format.parse(dateStr);
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}

    public static Date strToDate(String dateStr, String tFormat) {
        try {
            return new SimpleDateFormat(tFormat).parse(dateStr);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String dateToStr(Date date, String tFormat) {
        try {
            String rlt = null;
            rlt = new SimpleDateFormat(tFormat).format(date);

            return rlt;
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }

	public static String strFormat(String dateStr, String sFormat, String tFormat) {
	    try {
	    	String rlt = null;
			Date date = new SimpleDateFormat(sFormat).parse(dateStr);
			rlt = new SimpleDateFormat(tFormat).format(date);
			
			return rlt;
		} catch (ParseException e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	public static String getAge(String dateStr) {
	    try {
	    	String rlt = null;
	    	Date dateNow = new Date();
			Date date = format2.parse(dateStr);
			long dif = dateNow.getTime() - date.getTime();
			
			rlt = String.valueOf(dif/ONE_YEAR);
			
			return rlt;
		} catch (ParseException e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	public static Date birthdayToDate(String dateStr) {
	    try {
			Date date = format2.parse(dateStr);
			return date;
		} catch (ParseException e) {
			return null;
		}
	}
}
