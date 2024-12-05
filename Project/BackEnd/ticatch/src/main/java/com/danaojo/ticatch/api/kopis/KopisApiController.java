package com.danaojo.ticatch.api.kopis;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.danaojo.ticatch.api.util.KopisUtil;

public class KopisApiController {
	KopisUtil util = new KopisUtil();
	
	public String callConcertList() {
		StringBuilder response = new StringBuilder();
		try {
			String apiUrl = "http://kopis.or.kr/openApi/restful/pblprfr?service=";
			apiUrl += KopisConst.KOPIS_API_KEY;
			apiUrl += "&stdate=";
			apiUrl += util.returnNowToday();
			apiUrl += "&eddate=";
			apiUrl += util.returnAfterday();
			apiUrl += "&cpage=1&rows=10";
			
			// URL API 설정
<<<<<<< HEAD
			URL url = new URL("http://kopis.or.kr/openApi/restful/pblprfr?service=" + KopisConst.KOPIS_API_KEY
					+ "&stdate=20240101&eddate=20241231&cpage=1&rows=10");
=======
			URL url = new URL(apiUrl);
>>>>>>> 3056983a26899a56f4d46e38736e8c91ca543f6b
			HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
			httpURLConnection.setRequestMethod("GET");

			// 응답 코드 확인
			int result = httpURLConnection.getResponseCode();

			InputStream inputStream;

			if (result == 200) {
				System.out.println("200 호출 성공");
				inputStream = httpURLConnection.getInputStream();
			} else {
				inputStream = httpURLConnection.getErrorStream();
			}

			// InputStreamReader를 이용해 데이터를 읽어들임
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
			String line;

			// 데이터를 한 줄씩 읽어 StringBuilder에 저장
			while ((line = reader.readLine()) != null) {
				response.append(line);
			}

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return response.toString();
	}

	public String callConcertDetail(String concertId) {
		StringBuilder response = new StringBuilder();
		try {
			// URL API 설정
			URL url = new URL("http://www.kopis.or.kr/openApi/restful/pblprfr/"+concertId+"?service="+KopisConst.KOPIS_API_KEY);
			HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
			httpURLConnection.setRequestMethod("GET");

			// 응답 코드 확인
			int result = httpURLConnection.getResponseCode();

			InputStream inputStream;

			if (result == 200) {
				System.out.println("200 호출 성공");
				inputStream = httpURLConnection.getInputStream();
			} else {
				inputStream = httpURLConnection.getErrorStream();
			}

			// InputStreamReader를 이용해 데이터를 읽어들임
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
			String line;

			// 데이터를 한 줄씩 읽어 StringBuilder에 저장
			while ((line = reader.readLine()) != null) {
				response.append(line);
			}

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return response.toString();
	}
	
	public String callFacilityList(String facilityName) {
		StringBuilder response = new StringBuilder();
		
		try {
			// URL API 설정
			URL url = new URL("http://www.kopis.or.kr/openApi/restful/prfplc?service="+ KopisConst.KOPIS_API_KEY +"&cpage=1&rows=10&shprfnmfct="+ facilityName);
			HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
			httpURLConnection.setRequestMethod("GET");

			// 응답 코드 확인
			int result = httpURLConnection.getResponseCode();

			InputStream inputStream;

			if (result == 200) {
				System.out.println("200 호출 성공");
				inputStream = httpURLConnection.getInputStream();
			} else {
				inputStream = httpURLConnection.getErrorStream();
			}

			// InputStreamReader를 이용해 데이터를 읽어들임
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
			String line;

			// 데이터를 한 줄씩 읽어 StringBuilder에 저장
			while ((line = reader.readLine()) != null) {
				response.append(line);
			}

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return response.toString();
	}
	
	public String callFacilityDetail (String facilityId) {
		StringBuilder response = new StringBuilder();

		try {
			// URL API 설정
			URL url = new URL("http://www.kopis.or.kr/openApi/restful/prfplc/" + facilityId +"?service=" + KopisConst.KOPIS_API_KEY);
			HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
			httpURLConnection.setRequestMethod("GET");

			// 응답 코드 확인
			int result = httpURLConnection.getResponseCode();

			InputStream inputStream;

			if (result == 200) {
				System.out.println("200 호출 성공");
				inputStream = httpURLConnection.getInputStream();
			} else {
				inputStream = httpURLConnection.getErrorStream();
			}

			// InputStreamReader를 이용해 데이터를 읽어들임
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
			String line;

			// 데이터를 한 줄씩 읽어 StringBuilder에 저장
			while ((line = reader.readLine()) != null) {
				response.append(line);
			}

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return response.toString();
	}
}