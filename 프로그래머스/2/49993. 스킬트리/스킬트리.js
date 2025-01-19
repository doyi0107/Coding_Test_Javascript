function solution(skill, skill_trees) {
    let object = {};
    skill.split("").forEach((x) => object[x] =1);
    console.log(object)
    
    return skill_trees.map((x) => x.split("").filter(y => Boolean(object[y])).join(""))
    .filter((x) => Boolean(skill.startsWith(x))).length;

}