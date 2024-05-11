import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHammer, FaUserCircle, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="blue.600" color="white" py={4} px={8} position="fixed" top={0} left={0} right={0} zIndex={1}>
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              FixItHomeJobs
            </Text>
            <Flex gap={4}>
              <Link href="#">Home</Link>
              <Link href="#">Post a Job</Link>
              <Link href="#">Find Jobs</Link>
              <Link href="#">Contractor Profiles</Link>
              <Link href="#">My Account</Link>
            </Flex>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bgImage="https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxESVklMjBob21lJTIwaW1wcm92ZW1lbnR8ZW58MHx8fHwxNzE1NDQ2MDQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" h="500px" mt="64px">
          <VStack spacing={4}>
            <Heading as="h1" size="2xl" color="white" textAlign="center">
              Build Your Dream Home with FixItHomeJobs
            </Heading>
            <Text color="white" fontSize="lg">
              Join our community to post or bid on DIY projects!
            </Text>
            <Button colorScheme="orange" size="lg">
              Get Started
            </Button>
          </VStack>
        </Flex>

        {/* How It Works Section */}
        <Box py={10}>
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            How It Works
          </Heading>
          <SimpleGrid columns={3} spacing={10}>
            <VStack>
              <FaHammer size="3em" />
              <Text>Post a Job</Text>
            </VStack>
            <VStack>
              <FaUsers size="3em" />
              <Text>Get Bids</Text>
            </VStack>
            <VStack>
              <FaUserCircle size="3em" />
              <Text>Choose a Contractor</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Active Jobs Listing */}
        <Box py={10}>
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Active Jobs
          </Heading>
          <SimpleGrid columns={3} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Kitchen Remodel</Heading>
              <Text mt={4}>Location: San Francisco</Text>
              <Text>Budget: $5000</Text>
              <Text>Bids: 12</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Bathroom Fix</Heading>
              <Text mt={4}>Location: New York</Text>
              <Text>Budget: $2000</Text>
              <Text>Bids: 8</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Garden Landscaping</Heading>
              <Text mt={4}>Location: Miami</Text>
              <Text>Budget: $3500</Text>
              <Text>Bids: 15</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Contractor Highlight Section */}
        <Box py={10} bg="gray.100">
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Top Contractors
          </Heading>
          <SimpleGrid columns={3} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">John Doe</Heading>
              <Text mt={4}>Specialty: Electrician</Text>
              <Text>Rating: ★★★★☆</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Jane Smith</Heading>
              <Text mt={4}>Specialty: Plumber</Text>
              <Text>Rating: ★★★★★</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Mike Johnson</Heading>
              <Text mt={4}>Specialty: Carpenter</Text>
              <Text>Rating: ★★★★☆</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="blue.600" color="white" py={4} px={8} mt="auto">
          <Flex justify="space-between" align="center">
            <Text>© 2023 FixItHomeJobs</Text>
            <Flex gap={4}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
              <Link href="#">Contact Us</Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
