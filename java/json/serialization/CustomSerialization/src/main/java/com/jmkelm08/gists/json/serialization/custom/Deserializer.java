package com.jmkelm08.gists.json.serialization.custom;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Deserializer {
	public static String serializeRectangle(Rectangle rectangle) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(rectangle);
	}
	
	public static Rectangle deserializeRectangle(String rectangle) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.readValue(rectangle, Rectangle.class);
	}
	
	public static String serializeTriangle(Triangle triangle) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(triangle);
	}
	
	public static Triangle deserializeTriangle(String triangle) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.readValue(triangle, Triangle.class);
	}
	
	public static String serializeShape(Shape shape) throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(shape);
	}
	
	public static <T extends Shape> T deserializeShape(String shape, Class<T> valueType) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.readValue(shape, valueType);
	}
	
	public static Shape deserializeGenericShape(String shape) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(Shape.class, ShapeDeserializerMixin.class);
		return mapper.readValue(shape, Shape.class);
	}
	
	public static Shape deserializeGenericShape2(String shape) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(Shape.class, ShapeSubtypeMixin.class);
		return mapper.readValue(shape, Shape.class);
	}
}
