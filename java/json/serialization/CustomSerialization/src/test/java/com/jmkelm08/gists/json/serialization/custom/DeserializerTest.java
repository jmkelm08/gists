package com.jmkelm08.gists.json.serialization.custom;

import static org.junit.Assert.assertEquals;

import java.io.IOException;

import org.junit.Test;

public class DeserializerTest {

	@Test
	public void testDeserializeRectangle() throws IOException {
		final String rectangleString = "{\"name\":\"RECTANGLE\",\"numSides\":4,\"square\":true}";
		final Rectangle rect = new Rectangle();
		rect.setSquare(true);
		rect.setNumSides(4);
		rect.setName("RECTANGLE");
		
		assertEquals(rect, Deserializer.deserializeRectangle(rectangleString));	
	}

	@Test
	public void testDeserializeTriangle() throws IOException {
		final String triangleString = "{\"name\":\"TRIANGLE\",\"numSides\":3,\"equilateral\":true}";
		final Triangle tri = new Triangle();
		tri.setEquilateral(true);
		tri.setNumSides(3);
		tri.setName("TRIANGLE");
		
		assertEquals(tri, Deserializer.deserializeTriangle(triangleString));	
	}

	@Test
	public void testDeserializeShapeRectangle() throws IOException {
		final String rectangleString = "{\"name\":\"RECTANGLE\",\"numSides\":4,\"square\":true}";
		final Rectangle rect = new Rectangle();
		rect.setSquare(true);
		rect.setNumSides(4);
		rect.setName("RECTANGLE");
		
		assertEquals(rect, Deserializer.deserializeShape(rectangleString, Rectangle.class));	
	}
	
	@Test
	public void testDeserializeShapeTriangle() throws IOException {
		final String triangleString = "{\"name\":\"TRIANGLE\",\"numSides\":3,\"equilateral\":true}";
		final Triangle tri = new Triangle();
		tri.setEquilateral(true);
		tri.setNumSides(3);
		tri.setName("TRIANGLE");
		
		assertEquals(tri, Deserializer.deserializeShape(triangleString, Triangle.class));	
	}
	
	@Test
	public void testDeserializeShapeGenericTriangle() throws IOException {
		final String triangleString = "{\"name\":\"TRIANGLE\",\"numSides\":3,\"equilateral\":true}";
		final Triangle tri = new Triangle();
		tri.setEquilateral(true);
		tri.setNumSides(3);
		tri.setName("TRIANGLE");
		
		assertEquals(tri, Deserializer.deserializeGenericShape(triangleString));	
	}
	
	@Test
	public void testDeserializeShapeGenericTriangle2() throws IOException {
		final String triangleString = "{\"name\":\"TRIANGLE\",\"numSides\":3,\"equilateral\":true}";
		final Triangle tri = new Triangle();
		tri.setEquilateral(true);
		tri.setNumSides(3);
		tri.setName("TRIANGLE");
		
		assertEquals(tri, Deserializer.deserializeGenericShape2(triangleString));	
	}
}
