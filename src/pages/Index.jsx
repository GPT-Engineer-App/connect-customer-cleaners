import { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, Image, Grid, GridItem, useToast } from "@chakra-ui/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [location, setLocation] = useState("");
  const [cleaningManagers, setCleaningManagers] = useState([
    {
      id: 1,
      name: "김철수",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBtYW58ZW58MHx8fHwxNzEyODIwNjY1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "이영희",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjB3b21hbnxlbnwwfHx8fDE3MTI4MjA2NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "박민수",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbiUyMGluJTIwdW5pZm9ybXxlbnwwfHx8fDE3MTI4MjA2NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ]);
  const toast = useToast();

  const handleSearch = () => {
    if (location.trim() === "") {
      toast({
        title: "주소를 입력해주세요.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    // TODO: 실제 검색 로직 구현
    toast({
      title: `${location} 지역의 청소 매니저를 검색합니다.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" textAlign="center" marginBottom={8}>
        청소 매니저 매칭 서비스
      </Heading>
      <Stack spacing={4} direction="row" align="center" marginBottom={8}>
        <Input placeholder="주소를 입력하세요" size="lg" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleSearch}>
          검색
        </Button>
      </Stack>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {cleaningManagers.map((manager) => (
          <GridItem key={manager.id}>
            <Box borderWidth={1} borderRadius="lg" padding={4}>
              <Image src={manager.image} alt={manager.name} borderRadius="full" boxSize="160px" margin="auto" marginBottom={4} />
              <Heading as="h2" size="xl" textAlign="center">
                {manager.name}
              </Heading>
              <Text fontSize="lg" textAlign="center">
                평점: {manager.rating}
              </Text>
              <Button leftIcon={<FaUserCircle />} colorScheme="green" size="lg" width="100%" marginTop={4}>
                프로필 보기
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
