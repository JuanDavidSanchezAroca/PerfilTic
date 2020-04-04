package co.productstore.infrastructure.configuration.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;


import com.fasterxml.jackson.databind.ObjectMapper;

public final class ResponseHelper {

	private static final ObjectMapper mapper = new ObjectMapper();
	private static final String CONTENT_TYPE = "application/json;charset=UTF-8";

	private ResponseHelper() {
	}

	public static void sendError(HttpServletResponse response, Exception exception, int status, String path)
			throws IOException {
		response.setContentType(CONTENT_TYPE);
		response.setStatus(status);
		PrintWriter writer = response.getWriter();
		writer.write(mapper
				.writeValueAsString(new Response(status, exception.getMessage(), "Unauthorized")));
		writer.flush();
		writer.close();
	}

	public static void sendResponse(HttpServletResponse response, int status, Object object) throws IOException {
		response.setContentType(CONTENT_TYPE);
		PrintWriter writer = response.getWriter();
		writer.write(mapper.writeValueAsString(object));
		response.setStatus(status);
		writer.flush();
		writer.close();
	}

}
