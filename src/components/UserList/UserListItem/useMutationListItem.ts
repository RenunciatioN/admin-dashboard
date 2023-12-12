import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "services/user.service";

export const useMutationListItem = () => {
    const queryClient = useQueryClient();

    const mutationReset = useMutation({
        mutationKey: ["reset-hwid"],
        mutationFn: (key: string) => UserService.resetHwid(key),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
    const mutationBan = useMutation({
        mutationKey: ["ban-user"],
        mutationFn: (key: string) => UserService.ban(key),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
    const mutationRemove = useMutation({
        mutationKey: ["remove-user"],
        mutationFn: (key: string) => UserService.remove(key),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    return {
        mutationReset,
        mutationBan,
        mutationRemove,
    };
};
